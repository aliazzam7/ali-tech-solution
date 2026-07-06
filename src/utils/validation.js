// utils/validation.js
// Centralized validation + sanitization for the contact form.
// Goal: never trust client input — even though this form only builds a
// WhatsApp message client-side, we still guard against malformed data,
// oversized payloads, and injected markup/script content.

export const LIMITS = {
  fullName: { min: 2, max: 100 },
  email: { max: 254 },
  phone: { min: 7, max: 20 },
  company: { max: 150 },
  projectDescription: { min: 20, max: 1000 },
};

// Letters (Latin + Arabic), spaces, hyphens, apostrophes only — no digits/symbols.
const NAME_REGEX = /^[a-zA-Z\u0600-\u06FF' -]+$/;

// Digits, spaces, +, -, ( ) only.
const PHONE_REGEX = /^[0-9+\-() ]+$/;

// RFC-5322-ish, good enough for real-world form validation.
const EMAIL_REGEX = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;

/**
 * Strips HTML tags, script/style content, and dangerous characters.
 * Use on every free-text field before it's stored, displayed, or sent.
 *
 * NOTE: this does NOT trim leading/trailing whitespace. It's called on
 * every keystroke (via `update()` in the form), and trimming there would
 * strip the trailing space the moment it's typed — right before the next
 * word — making it impossible to type multi-word text. Trimming happens
 * separately, only at validation/submit time via `sanitizeFinal()`.
 */
export function sanitizeText(value, maxLength = 1000) {
  if (typeof value !== "string") return "";

  let clean = value
    // remove script/style blocks entirely (with content)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    // strip any remaining HTML tags
    .replace(/<[^>]*>/g, "")
    // neutralize javascript: / data: URIs and event handlers if typed as text
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    // strip control characters (keep normal whitespace, including spaces)
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");

  if (clean.length > maxLength) clean = clean.slice(0, maxLength);
  return clean;
}

/** Same as sanitizeText, but also trims leading/trailing whitespace.
 * Use this only at validation-check time and right before final submission
 * — never on every keystroke. */
export function sanitizeFinal(value, maxLength = 1000) {
  return sanitizeText(value, maxLength).trim();
}

export function isValidEmail(email) {
  const value = sanitizeFinal(email, LIMITS.email.max);
  return EMAIL_REGEX.test(value) && value.length <= LIMITS.email.max;
}

export function isValidName(name) {
  const value = sanitizeFinal(name, LIMITS.fullName.max);
  return (
    value.length >= LIMITS.fullName.min &&
    value.length <= LIMITS.fullName.max &&
    NAME_REGEX.test(value)
  );
}

/** Phone is optional in the form, but if present it must look like a phone number. */
export function isValidPhone(phone) {
  if (!phone) return true; // optional field
  const value = sanitizeFinal(phone, LIMITS.phone.max);
  const digitsOnly = value.replace(/[^0-9]/g, "");
  return (
    PHONE_REGEX.test(value) &&
    digitsOnly.length >= LIMITS.phone.min &&
    digitsOnly.length <= LIMITS.phone.max
  );
}

export function isValidDescription(text) {
  const value = sanitizeFinal(text, LIMITS.projectDescription.max);
  return (
    value.length >= LIMITS.projectDescription.min &&
    value.length <= LIMITS.projectDescription.max
  );
}

/** Ensures a single-select value is one of the allowed options (whitelist). */
export function isAllowedOption(value, allowedOptions) {
  if (!value) return true; // optional fields are allowed to be empty
  return allowedOptions.includes(value);
}

/** Ensures every item in a multi-select array is one of the allowed options. */
export function isAllowedOptionList(values, allowedOptions) {
  if (!Array.isArray(values)) return false;
  return values.every((v) => allowedOptions.includes(v));
}