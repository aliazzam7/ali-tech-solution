import { useMemo, useState } from "react";
import { CheckCircle2, Send, Loader2, AlertCircle } from "lucide-react";
import {
  BUDGET_RANGES,
  SERVICE_OPTIONS,
  RESOURCE_OPTIONS,
  TIMELINE_OPTIONS,
  CONTACT_METHODS,
} from "../../utils/constants";
import {
  LIMITS,
  sanitizeText,
  sanitizeFinal,
  isValidEmail,
  isValidName,
  isValidPhone,
  isValidDescription,
  isAllowedOption,
  isAllowedOptionList,
} from "../../utils/validation";
import { sendToWhatsApp } from "../../utils/whatsapp";
import "./ContactForm.css";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  whatsapp: "",
  company: "",
  service: "",
  budget: "",
  projectDescription: "",
  resources: [],
  timeline: "",
  contactMethod: "",
  // honeypot: real users never see/fill this. Bots that auto-fill every
  // input on the page will, and we silently drop the submission.
  website: "",
};

const DESCRIPTION_MIN_LENGTH = LIMITS.projectDescription.min;
const DESCRIPTION_MAX_LENGTH = LIMITS.projectDescription.max;

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  // Every field is sanitized on the way into state, so what lives in `form`
  // is already stripped of tags/scripts and hard-capped in length.
  const update = (field, rawValue, maxLength) => {
    const value =
      typeof rawValue === "string" ? sanitizeText(rawValue, maxLength) : rawValue;
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleResource = (resource) => {
    // Only allow toggling values that actually exist in RESOURCE_OPTIONS.
    if (!RESOURCE_OPTIONS.includes(resource)) return;
    setForm((prev) => {
      const exists = prev.resources.includes(resource);
      return {
        ...prev,
        resources: exists
          ? prev.resources.filter((r) => r !== resource)
          : [...prev.resources, resource],
      };
    });
  };

  const validate = () => {
    const next = {};

    const fullName = sanitizeFinal(form.fullName, LIMITS.fullName.max);
    if (!fullName) next.fullName = "Enter your full name.";
    else if (!isValidName(fullName))
      next.fullName = "Use letters only (2-100 characters), no numbers or symbols.";

    const email = sanitizeFinal(form.email, LIMITS.email.max);
    if (!email) next.email = "Enter your email address.";
    else if (!isValidEmail(email))
      next.email = "Enter a valid email address, e.g. name@example.com.";

    if (form.phone && !isValidPhone(form.phone))
      next.phone = "Enter a valid phone number (digits only, 7-20 characters).";

    if (form.whatsapp && !isValidPhone(form.whatsapp))
      next.whatsapp = "Enter a valid WhatsApp number (digits only, 7-20 characters).";

    if (!form.service) next.service = "Choose the service that fits best.";
    else if (!isAllowedOption(form.service, SERVICE_OPTIONS))
      next.service = "Choose a valid service from the list.";

    if (form.budget && !isAllowedOption(form.budget, BUDGET_RANGES))
      next.budget = "Choose a valid budget range from the list.";

    if (!isAllowedOptionList(form.resources, RESOURCE_OPTIONS))
      next.resources = "Choose valid resources from the list.";

    if (form.timeline && !isAllowedOption(form.timeline, TIMELINE_OPTIONS))
      next.timeline = "Choose a valid timeline from the list.";

    if (form.contactMethod && !isAllowedOption(form.contactMethod, CONTACT_METHODS))
      next.contactMethod = "Choose a valid contact method from the list.";

    const description = sanitizeFinal(form.projectDescription, LIMITS.projectDescription.max);
    if (!description) {
      next.projectDescription = "Tell us a bit about your idea.";
    } else if (!isValidDescription(description)) {
      next.projectDescription = `Add a few more details (${DESCRIPTION_MIN_LENGTH}-${DESCRIPTION_MAX_LENGTH} characters).`;
    }

    setErrors(next);
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot tripped -> silently pretend success, don't send anything.
    if (form.website) {
      setStatus("sent");
      return;
    }

    const next = validate();
    if (Object.keys(next).length > 0) {
      const firstField = document.querySelector('[data-invalid="true"]');
      firstField?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Build a fully sanitized payload — never trust state alone at send time.
    const safePayload = {
      fullName: sanitizeFinal(form.fullName, LIMITS.fullName.max),
      email: sanitizeFinal(form.email, LIMITS.email.max),
      phone: sanitizeFinal(form.phone, LIMITS.phone.max),
      whatsapp: sanitizeFinal(form.whatsapp, LIMITS.phone.max),
      company: sanitizeFinal(form.company, LIMITS.company.max),
      service: isAllowedOption(form.service, SERVICE_OPTIONS) ? form.service : "",
      budget: isAllowedOption(form.budget, BUDGET_RANGES) ? form.budget : "",
      projectDescription: sanitizeFinal(
        form.projectDescription,
        LIMITS.projectDescription.max
      ),
      resources: form.resources.filter((r) => RESOURCE_OPTIONS.includes(r)),
      timeline: isAllowedOption(form.timeline, TIMELINE_OPTIONS) ? form.timeline : "",
      contactMethod: isAllowedOption(form.contactMethod, CONTACT_METHODS)
        ? form.contactMethod
        : "",
    };

    setStatus("sending");
    setTimeout(() => {
      sendToWhatsApp(safePayload);
      setStatus("sent");
    }, 500);
  };

  const descriptionCount = form.projectDescription.length;
  const hasErrors = Object.values(errors).some(Boolean);

  const completedSteps = useMemo(() => {
    let count = 0;
    if (form.fullName && form.email) count += 1;
    if (form.service) count += 1;
    if (form.projectDescription.trim().length >= DESCRIPTION_MIN_LENGTH) count += 1;
    if (form.resources.length > 0) count += 1;
    if (form.timeline) count += 1;
    if (form.contactMethod) count += 1;
    return count;
  }, [form]);

  if (status === "sent") {
    return (
      <div className="contact-form-success glass" role="status">
        <CheckCircle2 size={40} color="var(--success)" aria-hidden="true" />
        <h3>Request sent</h3>
        <p>
          Your project details opened in WhatsApp — send the message and
          we'll reply within 24 hours.
        </p>
        <button
          className="btn btn-ghost"
          onClick={() => {
            setForm(initialState);
            setStatus("idle");
          }}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-progress" aria-hidden="true">
        <div className="contact-form-progress-track">
          <div
            className="contact-form-progress-fill"
            style={{ width: `${(completedSteps / 6) * 100}%` }}
          />
        </div>
        <span className="contact-form-progress-label">
          {completedSteps} of 6 sections completed
        </span>
      </div>

      {hasErrors && (
        <div className="contact-form-alert" role="alert">
          <AlertCircle size={16} />
          Please check the highlighted fields below before sending.
        </div>
      )}

      {/* Honeypot field — hidden from real users via CSS, visible to bots that
          fill every field programmatically. Do not remove or unhide. */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update("website", e.target.value, 200)}
        />
      </div>

      <fieldset className="contact-form-section">
        <legend>
          <span className="step-number">1</span> Personal Information
        </legend>
        <div className="contact-form-grid">
          <Field label="Full Name" required error={errors.fullName} htmlFor="fullName">
            <input
              id="fullName"
              data-invalid={Boolean(errors.fullName)}
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value, LIMITS.fullName.max)}
              placeholder="Your full name"
              autoComplete="name"
              maxLength={LIMITS.fullName.max}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
          </Field>
          <Field label="Email Address" required error={errors.email} htmlFor="email">
            <input
              id="email"
              type="email"
              data-invalid={Boolean(errors.email)}
              value={form.email}
              onChange={(e) => update("email", e.target.value, LIMITS.email.max)}
              placeholder="you@example.com"
              autoComplete="email"
              inputMode="email"
              maxLength={LIMITS.email.max}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </Field>
          <Field label="Phone Number" error={errors.phone} htmlFor="phone">
            <input
              id="phone"
              type="tel"
              data-invalid={Boolean(errors.phone)}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value, LIMITS.phone.max)}
              placeholder="+961 ..."
              autoComplete="tel"
              inputMode="tel"
              maxLength={LIMITS.phone.max}
              pattern="[0-9+\-() ]*"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
          </Field>
          <Field
            label="WhatsApp Number (if different)"
            error={errors.whatsapp}
            htmlFor="whatsapp"
          >
            <input
              id="whatsapp"
              type="tel"
              data-invalid={Boolean(errors.whatsapp)}
              value={form.whatsapp}
              onChange={(e) => update("whatsapp", e.target.value, LIMITS.phone.max)}
              placeholder="+961 ..."
              autoComplete="tel"
              inputMode="tel"
              maxLength={LIMITS.phone.max}
              pattern="[0-9+\-() ]*"
              aria-invalid={Boolean(errors.whatsapp)}
              aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
            />
          </Field>
          <Field label="Company Name (Optional)" full htmlFor="company">
            <input
              id="company"
              value={form.company}
              onChange={(e) => update("company", e.target.value, LIMITS.company.max)}
              placeholder="Company or brand name"
              autoComplete="organization"
              maxLength={LIMITS.company.max}
            />
          </Field>
        </div>
      </fieldset>

      <fieldset className="contact-form-section">
        <legend>
          <span className="step-number">2</span> Service Selection
        </legend>
        <Field error={errors.service}>
          <div className="pill-group" role="group" aria-label="Service selection">
            {SERVICE_OPTIONS.map((option) => (
              <button
                type="button"
                key={option}
                className={`pill ${form.service === option ? "is-selected" : ""}`}
                aria-pressed={form.service === option}
                onClick={() => update("service", option)}
              >
                {option}
              </button>
            ))}
          </div>
        </Field>
      </fieldset>

      <fieldset className="contact-form-section">
        <legend>
          <span className="step-number">3</span> Project Description
        </legend>
        <Field error={errors.projectDescription} htmlFor="projectDescription">
          <textarea
            id="projectDescription"
            rows={5}
            maxLength={DESCRIPTION_MAX_LENGTH}
            data-invalid={Boolean(errors.projectDescription)}
            value={form.projectDescription}
            onChange={(e) =>
              update("projectDescription", e.target.value, DESCRIPTION_MAX_LENGTH)
            }
            placeholder="Describe your idea, business, goals, or requirements..."
            aria-invalid={Boolean(errors.projectDescription)}
            aria-describedby={
              errors.projectDescription ? "projectDescription-error" : "projectDescription-count"
            }
          />
          <span id="projectDescription-count" className="field-hint">
            {descriptionCount}/{DESCRIPTION_MAX_LENGTH} characters
          </span>
        </Field>
        <Field label="Estimated Budget">
          <div className="pill-group" role="group" aria-label="Estimated budget">
            {BUDGET_RANGES.map((option) => (
              <button
                type="button"
                key={option}
                className={`pill ${form.budget === option ? "is-selected" : ""}`}
                aria-pressed={form.budget === option}
                onClick={() => update("budget", option)}
              >
                {option}
              </button>
            ))}
          </div>
        </Field>
      </fieldset>

      <fieldset className="contact-form-section">
        <legend>
          <span className="step-number">4</span> Existing Resources
        </legend>
        <p className="field-hint field-hint-standalone">Select any that already exist — this is optional.</p>
        <div className="pill-group" role="group" aria-label="Existing resources">
          {RESOURCE_OPTIONS.map((option) => (
            <button
              type="button"
              key={option}
              className={`pill ${form.resources.includes(option) ? "is-selected" : ""}`}
              aria-pressed={form.resources.includes(option)}
              onClick={() => toggleResource(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="contact-form-grid contact-form-grid-split">
        <fieldset className="contact-form-section">
          <legend>
            <span className="step-number">5</span> Project Timeline
          </legend>
          <div className="pill-group" role="group" aria-label="Project timeline">
            {TIMELINE_OPTIONS.map((option) => (
              <button
                type="button"
                key={option}
                className={`pill ${form.timeline === option ? "is-selected" : ""}`}
                aria-pressed={form.timeline === option}
                onClick={() => update("timeline", option)}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="contact-form-section">
          <legend>
            <span className="step-number">6</span> Preferred Contact Method
          </legend>
          <div className="pill-group" role="group" aria-label="Preferred contact method">
            {CONTACT_METHODS.map((option) => (
              <button
                type="button"
                key={option}
                className={`pill ${form.contactMethod === option ? "is-selected" : ""}`}
                aria-pressed={form.contactMethod === option}
                onClick={() => update("contactMethod", option)}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block contact-form-submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <Loader2 size={18} className="spin" /> Preparing your request...
          </>
        ) : (
          <>
            <Send size={18} /> Send Project Request
          </>
        )}
      </button>
      <p className="contact-form-footnote">
        Sending opens a pre-filled WhatsApp message so you can review it before it's sent.
      </p>
    </form>
  );
}

function Field({ label, required, error, full, htmlFor, children }) {
  return (
    <div className={`field ${full ? "field-full" : ""}`}>
      {label && (
        <label htmlFor={htmlFor}>
          {label} {required && <span className="field-required">*</span>}
        </label>
      )}
      {children}
      {error && (
        <span className="field-error" role="alert" id={htmlFor ? `${htmlFor}-error` : undefined}>
          <AlertCircle size={13} /> {error}
        </span>
      )}
    </div>
  );
}