import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "917217676271";
  const message = encodeURIComponent("Hi, I want a free consultation");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
      style={{ animationDuration: "2s", animationIterationCount: "infinite" }}
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
