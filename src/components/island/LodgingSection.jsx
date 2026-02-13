import React from "react";
import { motion } from "framer-motion";
import { Star, Waves, TreePalm, Mountain } from "lucide-react";
import SectionHeader from "./SectionHeader";
import BookingForm from "./BookingForm";

const lodgings = [
  {
    name: "Overwater Bungalow",
    description:
      "Wake up to the gentle sound of waves beneath your private glass-floor bungalow. Features a sun deck with direct ocean access.",
    price: "From $650/night",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    icon: Waves,
    features: ["Glass floor panels", "Private sun deck", "Ocean access ladder"],
  },
  {
    name: "Beachfront Villa",
    description:
      "Spacious open-air villas nestled among coconut palms, steps from the shore. Includes a private plunge pool and outdoor shower.",
    price: "From $480/night",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    icon: TreePalm,
    features: ["Private plunge pool", "Outdoor rain shower", "Garden terrace"],
  },
  {
    name: "Hillside Retreat",
    description:
      "Elevated eco-lodges with panoramic views of the island and surrounding ocean. Designed with sustainable bamboo architecture.",
    price: "From $380/night",
    image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80",
    icon: Mountain,
    features: ["Panoramic views", "Bamboo architecture", "Infinity edge pool"],
  },
];

export default function LodgingSection() {
  return (
    <section id="lodging" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Stay With Us"
          title="Lodging"
          description="Choose from our curated collection of accommodations, each designed to immerse you in the natural beauty of Taniti Island."
        />

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {lodgings.map((lodging, index) => (
            <motion.div
              key={lodging.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-500 hover:shadow-xl hover:ring-slate-200"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={lodging.image}
                  alt={lodging.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <lodging.icon className="h-4 w-4 text-sky-500" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    {lodging.name}
                  </h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-500">
                  {lodging.description}
                </p>

                {/* Features */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {lodging.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-semibold text-slate-900">
                    {lodging.price}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-sky-600 transition-colors group-hover:text-sky-700">
                    View Details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-md"
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  );
}