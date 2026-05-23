import { Scissors, Camera, MessageCircle, Globe, MapPin, Phone, Clock } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Classic Haircut", href: "#services" },
    { label: "Beard Grooming", href: "#services" },
    { label: "Hot Towel Shave", href: "#services" },
    { label: "Hair Styling", href: "#services" },
    { label: "Kids Haircut", href: "#services" },
  ],
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Gallery", href: "#gallery" },
    { label: "Our Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  hours: [
    { day: "Monday - Friday", time: "9:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
    { day: "Sunday", time: "10:00 AM - 4:00 PM" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A87C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Scissors className="w-5 h-5 text-gold" />
              </div>
              <span className="text-xl font-display font-bold">
                <span className="text-cream">BLACK</span>
                <span className="text-gold">STAG</span>
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Premium barbershop providing exceptional grooming services with a classic touch. 
              Where tradition meets modern style.
            </p>
            <div className="flex gap-3">
              {[MessageCircle, Camera, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/30 flex items-center justify-center text-cream/60 hover:text-gold transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-cream font-display text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cream font-display text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-cream font-display text-lg font-semibold mb-6">Hours</h3>
            <ul className="space-y-4">
              {footerLinks.hours.map((item) => (
                <li key={item.day} className="text-sm">
                  <span className="text-gold font-medium">{item.day}</span>
                  <br />
                  <span className="text-cream/60">{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/5 space-y-2">
              <a href="#" className="flex items-center gap-2 text-cream/60 hover:text-gold text-sm transition-colors">
                <MapPin className="w-3.5 h-3.5" />
                123 Barber Street, NY 10001
              </a>
              <a href="#" className="flex items-center gap-2 text-cream/60 hover:text-gold text-sm transition-colors">
                <Phone className="w-3.5 h-3.5" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            © {new Date().getFullYear()} BlackStag Barbershop. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-cream/40 text-xs">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
