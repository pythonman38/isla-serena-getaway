import React from "react";
import { motion } from "framer-motion";
import { Compass, Flower2, Fish, Sailboat, Footprints, UtensilsCrossed } from "lucide-react";
import SectionHeader from "./SectionHeader";

const activities = [
  {
    name: "Island Orientation Tour",
    description: "Perfect for first-time visitors! Discover Taniti's highlights, local culture, and hidden gems on this guided introduction to the island.",
    icon: Compass,
    duration: "2 hours",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
  },
  {
    name: "Snorkeling & Diving",
    description: "Explore vibrant coral reefs teeming with tropical fish and sea turtles in crystal-clear waters.",
    icon: Fish,
    duration: "2-4 hours",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    name: "Jungle Trekking",
    description: "Hike through lush rainforest canopies to discover hidden waterfalls and exotic wildlife.",
    icon: Compass,
    duration: "3-5 hours",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
  },
  {
    name: "Sunset Sailing",
    description: "Cruise along the coastline aboard a traditional catamaran as the sun dips below the horizon.",
    icon: Sailboat,
    duration: "2 hours",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
  },
  {
    name: "Spa & Wellness",
    description: "Rejuvenate with traditional island treatments using locally sourced botanicals and volcanic clay.",
    icon: Flower2,
    duration: "1-3 hours",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    name: "Beach Yoga",
    description: "Start your mornings with guided yoga sessions on the soft white sand as the sun rises.",
    icon: Footprints,
    duration: "1 hour",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    name: "Island Cuisine Tour",
    description: "Savor the flavors of Taniti Island with a guided culinary tour through local markets and kitchens.",
    icon: UtensilsCrossed,
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
];

export default function ActivitiesSection() {
  return (
    <section id="activities" className="bg-gradient-to-b from-sky-50/50 to-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Explore & Experience"
          title="Activities"
          description="From thrilling ocean adventures to serene wellness rituals, every moment on Taniti Island is crafted for wonder."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl w-full"
            >
              {/* Background image */}
              <div className="relative h-72">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/80" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="mb-2 flex items-center gap-2">
                  <div className="rounded-lg bg-white/20 p-1.5 backdrop-blur-sm">
                    <activity.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs font-medium text-white/70">
                    {activity.duration}
                  </span>
                </div>
                <h3 className="mb-1.5 text-xl font-semibold text-white">
                  {activity.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/80 transition-all duration-300">
                  {activity.description}
                </p>
                <div className="mt-4 overflow-hidden">
                  <motion.span
                    className="inline-block text-xs font-medium uppercase tracking-wider text-white/90 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Learn More →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}