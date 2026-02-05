import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-sky-600">
        {label}
      </p>
      <h2
        className="mb-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}