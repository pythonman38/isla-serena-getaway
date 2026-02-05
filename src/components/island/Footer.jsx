import React from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3
              className="mb-3 text-2xl font-bold tracking-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Isla Serena
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              A secluded paradise in the South Pacific where luxury meets
              untouched nature.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-slate-400 transition-colors hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 transition-colors hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 transition-colors hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Lodging", "Activities", "Transportation", "Gallery", "Events"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Information
            </h4>
            <ul className="space-y-3">
              {["About Us", "Sustainability", "Careers", "Press", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                <span className="text-sm text-slate-400">
                  Isla Serena, South Pacific <br /> Latitude -16.5°, Longitude -151.7°
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-sky-400" />
                <span className="text-sm text-slate-400">+1 (555) 987-6543</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-sky-400" />
                <span className="text-sm text-slate-400">hello@islaserena.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
          <p className="text-xs text-slate-500">
            © 2026 Isla Serena Resort & Spa. All rights reserved. This is a
            fictitious establishment for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}