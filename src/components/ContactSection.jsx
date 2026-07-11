import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Reveal } from "./Reveal";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const ContactSection = () => {
  const {toast} = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    ).then(() => {
      setFormData({ name: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "Thank you for your message. I'll get back to you soon!" });
    }).catch(() => {
      toast({ title: "Error!", description: "Oops! Something went wrong. Please try again.", variant: "destructive" });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <Reveal>
          <TextGenerateEffect
            words="Get In Touch"
            className="text-3xl md:text-4xl font-bold mb-4 text-center [&>div>div>div>span:nth-child(3)]:text-primary"
          />
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal delay={0.2} className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-start">Email</h4>
                  <a
                    href="mailto:rupamdutta905@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    rupamdutta905@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-start">Phone</h4>
                  <a
                    href="tel:+917980735311"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    +91 7980735311
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-start">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Kolkata, West Bengal, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/rupam-dutta-/" target="_blank" className="hover:-translate-y-1 hover:text-primary transition-transform">
                  <Linkedin />
                </a>
                <a href="https://x.com/itzRogue_" target="_blank" className="hover:-translate-y-1 hover:text-primary transition-transform">
                  <Twitter />
                </a>
                <a href="https://www.instagram.com/itz.rogue/" target="_blank" className="hover:-translate-y-1 hover:text-primary transition-transform">
                  <Instagram />
                </a>
                <a href="https://github.com/rupam905" target="_blank" className="hover:-translate-y-1 hover:text-primary transition-transform">
                  <Github />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="card-surface p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full px-4 py-3 rounded-md border border-primary/20 bg-background/50 backdrop-blur-sm focus:outline-hidden focus:ring-2 focus:ring-ring/50 focus:border-ring/40 transition-all"
                  placeholder="John Doe"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full px-4 py-3 rounded-md border border-primary/20 bg-background/50 backdrop-blur-sm focus:outline-hidden focus:ring-2 focus:ring-ring/50 focus:border-ring/40 transition-all"
                  placeholder="john@gmail.com"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  className="w-full px-4 py-3 rounded-md border border-primary/20 bg-background/50 backdrop-blur-sm focus:outline-hidden focus:ring-2 focus:ring-ring/50 focus:border-ring/40 resize-none transition-all"
                  placeholder="Leave a message"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <Button
                disabled={isSubmitting}
                type="submit"
                borderRadius="0.5rem"
                className="bg-background/95 text-foreground font-semibold w-full flex items-center justify-center gap-2 h-12"
                borderClassName="h-10 w-10 bg-[radial-gradient(var(--color-primary)_40%,transparent_60%)]"
                containerClassName="w-full h-12"
              >
                {isSubmitting ? "Sending...":"Send Message"} <Send size={16} />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
