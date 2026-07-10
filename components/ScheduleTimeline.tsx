"use client";

import ScheduleCard from "@/components/ScheduleCard";

const timeline = [
  { time: "14:00 PM", mainEvent: "Vendégérkezés", description: "Italozás és harapnivalók" },
  { time: "15:00 PM", mainEvent: "Ceremónia", description: "" },
  { time: "16:00 PM", mainEvent: "Gratulációk", description: "pezsgős koccintás és csoportképek" },
  // { time: "17:00 PM", mainEvent: "TBD", description: "Programok, játékok" },
  { time: "19:00 PM", mainEvent: "Köszöntők és vacsora", description: "" },
  { time: "20:30 PM", mainEvent: "Torta vágás", description: "" },
  { time: "12:00 AM", mainEvent: "Éjféli vacsora és Buli", description: "" },
];

export default function ScheduleTimeline() {

  return (
    <div className="space-y-4 max-w-2xl mx-auto pb-8">
    {timeline.map((item, index) => (
      <ScheduleCard
        key={index.toString()}
        time={item.time}
        mainEvent={item.mainEvent}
        description={item.description}
      />
    ))}
    </div>
  );
}
