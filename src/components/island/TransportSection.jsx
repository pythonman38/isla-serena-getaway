import React from "react";
import { motion } from "framer-motion";
import { Plane, Ship, Car, Clock, DollarSign, Users } from "lucide-react";
import SectionHeader from "./SectionHeader";

const transports = [
  {
    name: "Seaplane Transfer",
    description:
      "The most scenic way to arrive. Our luxury seaplanes depart daily from the mainland, offering breathtaking aerial views of the archipelago.",
    icon: Plane,
    details: [
      { icon: Clock, label: "Duration", value: "45 minutes" },
      { icon: DollarSign, label: "Price", value: "$320 round trip" },
      { icon: Users, label: "Capacity", value: "8 passengers" },
    ],
    schedule: "Daily departures at 8:00 AM, 12:00 PM, 4:00 PM",
    color: "from-sky-500 to-blue-600",
    bgAccent: "bg-sky-50",
    textAccent: "text-sky-600",
  },
  {
    name: "Island Ferry",
    description:
      "Our premium catamaran ferries offer a comfortable cruise with open-air observation decks, a full bar, and stunning ocean views.",
    icon: Ship,
    details: [
      { icon: Clock, label: "Duration", value: "2 hours" },
      { icon: DollarSign, label: "Price", value: "$95 round trip" },
      { icon: Users, label: "Capacity", value: "120 passengers" },
    ],
    schedule: "Departures every 3 hours from 6:00 AM to 6:00 PM",
    color: "from-emerald-500 to-teal-600",
    bgAccent: "bg-emerald-50",
    textAccent: "text-emerald-600",
  },
  {
    name: "Island Shuttle",
    description:
      "Once on the island, our fleet of electric shuttles and golf carts provides complimentary transportation between all resort areas.",
    icon: Car,
    details: [
      { icon: Clock, label: "Frequency", value: "Every 15 min" },
      { icon: DollarSign, label: "Price", value: "Complimentary" },
      { icon: Users, label: "Coverage", value: "All resort areas" },
    ],
    schedule: "Available 24/7 with on-demand service after 10:00 PM",
    color: "from-amber-500 to-orange-600",
    bgAccent: "bg-amber-50",
    textAccent: "text-amber-600",
  },
];

export default function TransportSection() {
  return (
    <section id="transportation" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Getting Here & Around"
          title="Transportation"
          description="Whether by air or sea, your journey to Taniti Island is as enchanting as the destination itself."
        />

        <div className="space-y-8">
          {transports.map((transport, index) => (
            <motion.div
              key={transport.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-500 hover:shadow-lg hover:ring-slate-200"
            >
              <div className="flex flex-col md:flex-row">
                {/* Icon / Visual Section */}
                <div
                  className={`flex items-center justify-center bg-gradient-to-br ${transport.color} p-6 md:w-56 md:p-12`}
                >
                  <div className="rounded-2xl bg-white/20 p-5 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <transport.icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8">
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {transport.name}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-500">
                    {transport.description}
                  </p>

                  {/* Details Grid */}
                  <div className="mb-5 grid grid-cols-3 gap-2 sm:gap-4">
                    {transport.details.map((detail) => (
                      <div
                        key={detail.label}
                        className={`rounded-xl ${transport.bgAccent} p-2 sm:p-3 text-center`}
                      >
                        <detail.icon
                          className={`mx-auto mb-1 h-4 w-4 ${transport.textAccent}`}
                        />
                        <p className="text-xs text-slate-400">{detail.label}</p>
                        <p className={`text-sm font-semibold ${transport.textAccent}`}>
                          {detail.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Schedule */}
                  <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span className="text-xs text-slate-500">
                      {transport.schedule}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}