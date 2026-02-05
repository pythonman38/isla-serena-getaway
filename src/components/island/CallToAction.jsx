import React from "react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-blue-900/70" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-3xl text-center text-white"
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/70">
          Your Paradise Awaits
        </p>
        <h2
          className="mb-6 text-3xl font-bold leading-tight md:text-5xl"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Ready to Escape?
        </h2>
        <p className="mb-10 text-base leading-relaxed text-white/80 md:text-lg">
          Reserve your stay at Taniti Island and discover a world where time slows
          down, nature comes alive, and every sunset feels like a private
          performance.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#lodging"
            className="rounded-full bg-white px-10 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
          >
            Reserve Your Stay
          </a>
          <a
            href="#activities"
            className="rounded-full border border-white/30 px-10 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10"
          >
            Explore Activities
          </a>
        </div>
      </motion.div>
    </section>
  );
}