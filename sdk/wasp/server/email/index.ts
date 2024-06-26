import { initEmailSender } from "./core/index.js";

const emailProvider = {
    type: "smtp",
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    username: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
} as const;

// PUBLIC API
export const emailSender = initEmailSender(emailProvider);

// PUBLIC API
export type { Email, EmailFromField } from "./core/types.js";
