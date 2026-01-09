import { runWhatsapp } from "./sites/whatsapp";

const host = location.hostname;

if (host.includes("whatsapp.com")) {
  runWhatsapp();
}
