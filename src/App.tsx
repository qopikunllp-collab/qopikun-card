/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

// Inline SVGs for Social Icons
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.42.679.819.896 1.377.164.422.359 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.248 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.42.419-.819.679-1.377.896-.422.164-1.057.359-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.248-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.42-.679-.819-.896-1.377-.164-.422-.359-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.248-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.419.819-.679 1.377-.896.422-.164 1.057-.359 2.227-.412 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.332 4.143.628c-.788.306-1.455.717-2.12 1.382C1.358 2.675.947 3.342.641 4.13c-.296.762-.496 1.632-.556 2.91C.014 8.32 0 8.728 0 11.987v.025c0 3.259.014 3.667.072 4.947.06 1.278.26 2.148.556 2.91.306.788.717 1.455 1.382 2.12.665.665 1.332 1.076 2.12 1.382.762.296 1.632.496 2.91.556 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.278-.06 2.148-.26 2.91-.556.788-.306 1.455-.717 2.12-1.382.665-.665 1.076-1.332 1.382-2.12.296-.762.496-1.632.556-2.91.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.278-.26-2.148-.556-2.91-.306-.788-.717-1.455-1.382-2.12C21.326 1.345 20.659.934 19.871.628c-.762-.296-1.632-.496-2.91-.556C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.012 4.012 0 110-8.024 4.012 4.012 0 010 8.024zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const WebsiteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-9 h-9 fill-white">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

// Internal Icons
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-blue stroke-2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-blue stroke-2">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-blue stroke-2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const FileCheckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-brand-blue stroke-2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/>
  </svg>
);

const SocialButton = ({ icon: Icon, href, label }: { icon: any, href: string, label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.18, rotate: 3 }}
    whileTap={{ scale: 0.95 }}
    className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-brand-blue to-brand-accent social-glow transition-transform"
    aria-label={label}
  >
    <Icon />
  </motion.a>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    whileHover={{ y: -3 }}
    className="bg-[#eef3ff] px-5 py-2.5 rounded-full font-semibold text-sm transition-colors hover:bg-[#dfe8ff] badge-shadow flex items-center gap-2"
  >
    {children}
  </motion.div>
);

const MiniCard = ({ icon: Icon, children }: { icon: any, children: React.ReactNode }) => (
  <motion.div 
    whileHover={{ y: -6 }}
    className="bg-white p-5 rounded-2xl text-center font-semibold card-shadow transition-transform flex flex-col items-center gap-3"
  >
    <Icon />
    <span className="text-sm">{children}</span>
  </motion.div>
);

const ServiceCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    whileHover={{ y: -6 }}
    className="bg-white p-5 rounded-2xl text-center font-semibold card-shadow transition-transform border border-black/5"
  >
    <span className="text-sm">{children}</span>
  </motion.div>
);

const ContactBox = ({ icon, children }: { icon: string, children: React.ReactNode }) => (
  <div className="bg-[#f4f7ff] p-4 rounded-xl text-center font-semibold text-sm flex flex-col items-center gap-2">
    <span className="text-lg">{icon}</span>
    {children}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center py-10 px-4">
      <div className="max-w-[900px] w-full">
        
        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-[32px] p-8 md:p-12 card-shadow overflow-hidden relative"
        >
          {/* Logo */}
          <div className="flex justify-center -mb-4 -mt-4">
            <img src="logo.png" alt="Qopikun Logo" className="company-logo" />
          </div>

          {/* Header */}
          <div className="text-center space-y-3 mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-blue tracking-tight">
              Qopikun Global Services Pvt. Ltd.
            </h1>
            <div className="text-lg md:text-xl font-semibold text-brand-accent italic">
              Trusted Partners in Aerospace Quality, Inspection & Training
            </div>
            <div className="text-sm opacity-80 font-medium">
              AS9100D & BS EN ISO 9001:2015 Certified Company
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge>
              <span>👥</span>
              <span>Team Strength: 45+ Professionals</span>
            </Badge>
            <Badge>
              <span>👤</span>
              <span>Founder: Arjun</span>
            </Badge>
          </div>

          {/* Description */}
          <div className="text-center space-y-8 mb-10">
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-gray-700 font-medium">
              "Delivering defence-ready inspection, vendor assessment, and technical data compliance solutions for global customers."
            </p>
            <div>
              <motion.a 
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.qopikun.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-br from-brand-blue to-brand-accent text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-[0_10px_25px_rgba(31,94,255,0.35)]"
              >
                Contact Us
              </motion.a>
            </div>
          </div>

          {/* Mini Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <MiniCard icon={ShieldIcon}>Defence-Ready Team</MiniCard>
            <MiniCard icon={GlobeIcon}>Global Coverage</MiniCard>
            <MiniCard icon={ZapIcon}>AS9100-Certified Process</MiniCard>
            <MiniCard icon={FileCheckIcon}>Fast Digital Reporting</MiniCard>
          </div>

          {/* Services */}
          <div className="space-y-6 mb-12">
            <h2 className="text-center text-2xl font-display font-bold text-brand-blue">Core Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <ServiceCard>Third-Party Inspection</ServiceCard>
              <ServiceCard>Vendor Assessment</ServiceCard>
              <ServiceCard>CMM Inspection</ServiceCard>
              <ServiceCard>Technical Data (FAI & PPAP)</ServiceCard>
              <ServiceCard>QMS Consultation</ServiceCard>
              <ServiceCard>Training & Internship</ServiceCard>
            </div>
          </div>

          {/* Social Connect */}
          <div className="text-center space-y-8 mb-12">
            <h2 className="text-2xl font-display font-bold text-brand-blue">Connect With Qopikun</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <SocialButton 
                icon={WhatsAppIcon} 
                href="https://wa.me/919964517976" 
                label="WhatsApp" 
              />
              <SocialButton 
                icon={LinkedInIcon} 
                href="https://www.linkedin.com/company/qopikunglobalservices/" 
                label="LinkedIn" 
              />
              <SocialButton 
                icon={InstagramIcon} 
                href="https://www.instagram.com/qopikun/" 
                label="Instagram" 
              />
              <SocialButton 
                icon={YouTubeIcon} 
                href="https://www.youtube.com/@qopikunservicesllp2798" 
                label="YouTube" 
              />
              <SocialButton 
                icon={WebsiteIcon} 
                href="https://www.qopikun.com" 
                label="Website" 
              />
            </div>
          </div>

          {/* Contact Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ContactBox icon="📍">
              <span>Peenya, Bengaluru, Karnataka</span>
            </ContactBox>
            <ContactBox icon="📞">
              <span>+91 9964517976<br/>+91 9900861042</span>
            </ContactBox>
            <ContactBox icon="📧">
              <span>qopikunglobal@gmail.com</span>
            </ContactBox>
          </div>

        </motion.div>

        {/* Copyright */}
        <div className="text-center pt-12">
          <p className="text-[11px] text-white/50 font-bold tracking-[0.25em] uppercase">
            © 2026 Qopikun Global Services Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}
