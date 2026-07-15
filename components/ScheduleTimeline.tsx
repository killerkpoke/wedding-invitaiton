"use client";

import ScheduleCard from "@/components/ScheduleCard";

const timeline = [
  { time: "14:00", mainEvent: "Vendégérkezés", description: "Italozás és harapnivalók" },
  { time: "15:00", mainEvent: "Ceremónia", description: "" },
  { time: "16:00", mainEvent: "Gratulációk", description: "pezsgős koccintás és csoportképek" },
  // { time: "17:00", mainEvent: "TBD", description: "Programok, játékok" },
  { time: "18:00", mainEvent: "Köszöntők és vacsora", description: "" },
  { time: "20:00", mainEvent: "Torta vágás", description: "" },
  { time: "00:00", mainEvent: "Éjféli vacsora és Buli", description: "" },
];

export default function ScheduleTimeline() {

  return (
    <div className="space-y-4 max-w-2xl mx-auto pb-8">
    {timeline.map((item, index) => (
      <ScheduleCard
        key={index.toString()}
        id={index.toString()}
        time={item.time}
        mainEvent={item.mainEvent}
        description={item.description}
      />
    ))}
    </div>
  );
}
