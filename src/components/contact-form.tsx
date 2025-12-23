"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      // Later: send to backend
      await new Promise((res) => setTimeout(res, 1200));

      toast.success("Message sent successfully! We'll get back to you soon.");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-muted/40">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white border rounded-2xl p-10 shadow-sm">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Send Us a Message
          </h2>

          <p className="text-center text-muted-foreground mb-10">
            Fill out the form below and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  type="email"
                  className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message here..."
                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-70"
              >
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
