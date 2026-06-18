import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      phone,
      message,
      website, // honeypot
    } = data;

    if (website) {
      return Response.json({ success: true });
    }

    await resend.emails.send({
      from: "The Malawian Fish Room <contact@themalawianfishroom.ca>",
      to: "themalawianfishroom@outlook.com",
      subject: `Fish Inquiry from ${name}`,
      replyTo: email,
      text: `
Name: ${name}

Email: ${email}

Phone: ${phone}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 },
    );
  }
}