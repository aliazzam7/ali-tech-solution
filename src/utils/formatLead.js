export function formatLead(formData) {
  const {
    fullName,
    email,
    phone,
    whatsapp,
    company,
    service,
    budget,
    projectDescription,
    resources,
    timeline,
    contactMethod,
  } = formData;

  const lines = [
    ` New Project Request - Ali Tech Solution`,
    ``,
    ` Name: ${fullName || "-"}`,
    ` Email: ${email || "-"}`,
    ` Phone: ${phone || "-"}`,
  ];

  if (whatsapp) lines.push(` WhatsApp: ${whatsapp}`);
  if (company) lines.push(` Company: ${company}`);

  lines.push(
    ` Service: ${service || "-"}`,
    ` Budget: ${budget || "-"}`,
    ` Timeline: ${timeline || "-"}`,
    ` Preferred Contact: ${contactMethod || "-"}`,
  );

  if (resources && resources.length) {
    lines.push(` Existing Resources: ${resources.join(", ")}`);
  }

  lines.push(
    ``,
    ` Project Idea:`,
    projectDescription || "-",
    ``,
    ` Source: Website - Ali Tech Solution`
  );

  return lines.join("\n");
}
