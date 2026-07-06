import siteConfig from "../data/siteConfig";
import { formatLead } from "./formatLead";

/**
 * Builds a wa.me link with the pre-filled lead message and opens it
 * in a new tab, letting the user review and send it from WhatsApp.
 */
export function sendToWhatsApp(formData) {
  const message = formatLead(formData);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
  return url;
}
