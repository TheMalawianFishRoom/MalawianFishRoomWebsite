"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const recipient = "themalawianfishroom@outlook.com";

export function ContactForm() {
  const searchParams = useSearchParams();
  const fishParam = searchParams.get("fish");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Honeypot field
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (fishParam) {
      setMessage((current) =>
        current
          ? current
          : `Hi, I'm interested in: ${fishParam}\n\nPlease let me know about availability and pricing.`,
      );
    }
  }, [fishParam]);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        website,
      }),
    });

    if (response.ok) {
      alert("Message sent successfully!");

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setWebsite("");
    } else {
      alert(
        "There was a problem sending your message. Please email us directly at " +
          recipient,
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-bold">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="input-pill"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-bold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="input-pill"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-bold">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="(000) 000-0000"
          className="input-pill"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="input-pill min-h-[140px] resize-y rounded-3xl"
          required
        />
      </div>

      {/* Honeypot field for spam bots */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send inquiry
      </button>

      <p className="text-xs text-[#2A2B2A]/55">
        Messages are sent directly to our inbox. If you experience any issues,
        you can also email us directly at {recipient}.
      </p>
    </form>
  );
}
