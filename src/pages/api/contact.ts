import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  inquiryType?: string;
};

const getAccessToken = async () => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_CLIENT_REFRESH_TOKEN;
console.log(clientId, clientSecret, refreshToken,"google");
  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Google OAuth environment variables.");
  }

  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!response.ok) {
    console.log(response,"response");
    const errorText = await response.text();
    throw new Error(`Failed to fetch access token: ${errorText}`);
  }

  const data = (await response.json()) as { access_token?: string };
  console.log(data,"data");
  if (!data.access_token) {
    throw new Error("Access token missing from response.");
  }

  return data.access_token;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
      inquiryType,
    } = req.body as ContactPayload;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const fromUser = process.env.EMAIL_USER;
    if (!fromUser) {
      return res.status(500).json({ message: "EMAIL_USER is not configured." });
    }

    const accessToken = await getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: fromUser,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_CLIENT_REFRESH_TOKEN,
        accessToken,
      },
    });

    const subject = `Contact form: ${inquiryType || "general"} - ${firstName} ${lastName}`;

    const text = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      `Company: ${company || "N/A"}`,
      `Inquiry Type: ${inquiryType || "general"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Inquiry Type:</strong> ${inquiryType || "general"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from: fromUser,
      to: "sajjuali439@gmail.com",
      // cc: "afraz@bdata.ca",
      replyTo: email,
      subject,
      text,
      html,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send message.";
    return res.status(500).json({ message });
  }
}
