"use client";
export default function ScheduleCard({
  key,
  time,
  mainEvent,
  description
}: {
  key: string
  time: string;
  mainEvent: string;
  description: string;
}) {

  return (
    <div id={`event-${key}`} className="flex items-center card bg-[#c3b091] shadow-sm p-4">
      <div className="badge bg-[#9F2D00] border-[#9F2D00] text-white px-3 py-1 rounded-md text-sm font-semibold mr-4">
        { time }
      </div>
      <div>
        <p className="font-medium text-white">{mainEvent}</p>
        <p className="text-sm text-white">
          {description}
        </p>
      </div>
    </div>
  );
}
