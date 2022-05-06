import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../adapters/mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "08c23f176c4fd4",
    pass: "2ca9ca6abf7100",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipa Feedget <oi@feedget.com>",
      to: "José Boné <bjosemateus@gmail.com>",
      subject,
      html: body,
    });
  }
}
