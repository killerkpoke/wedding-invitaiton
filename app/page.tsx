import FadeInOnScroll from "@/components/FadeInOnScroll";
import FoodMenuCarousel from "@/components/FoodMenuCarousel";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import Image from "next/image";
import { ViewTransition } from "react";

function MapEmbed() {
  return (
    <iframe
      className="w-full h-96 rounded-lg"
      loading="lazy"
      src="https://www.google.com/maps?q=%C3%96reg+T%C3%B6lgy+Kast%C3%A9ly-Fogad%C3%B3&output=embed"
    />
  );
}
export default function Home() {
  return (
    <div className="max-w-4xl mx-auto font-semibold text-center">
      <h1 className="text-orange-900 text-2xl lg:text-4xl mt-8 px-8">
        Kedves Családunk és Barátaink!
      </h1>
      <p className="text-orange-900 text-lg pt-6 px-4">
        Nagyon örülünk, hogy életünk egyik legfontosabb napját veletek
        ünnepelhetjük. Az oldalon minden fontos információt megtaláltok a nagy
        napról.
      </p>
      <ViewTransition name={`photo-1`} share="morph">
        <div
          id="item1"
          className="scroll-mt-24 hover-3d cursor-pointer mb-18 animate-fade-in"
        >
          <div className="card bg-white text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
            <div className="card-body">
              <div className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[900px] mx-auto">
                <Image
                  src="/sketch_4_wedding_inv.jpg"
                  alt="Hero"
                  width={900}
                  height={1260}
                  loading="eager"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </ViewTransition>
      <FadeInOnScroll>
        <section
          id="item2"
          className="scroll-mt-24 mt-12 md:mt-24 pt-6 md:pt-8 card bg-white text-base-content border-base-200 shadow-xl"
        >
          <div className="grid md:grid-cols-1 gap-4 md:gap-6 mb-6">
            <div className="text-center px-2">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-900 mb-4 md:mb-8">
                Ceremónia | Szállás <i>(opciónális)</i>
              </p>
              <p className="text-base sm:text-lg text-orange-600 mt-4">
                Öreg Tölgy Kastély-Fogadó
              </p>
              <p className="text-base sm:text-lg text-orange-600 mt-2 md:mt-4 mb-4 md:mb-8">
                Pusztazámor, Kossuth Lajos u. 22
              </p>
              <MapEmbed />
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Schedule Section */}
      <FadeInOnScroll>
        <section
          id="item3"
          className="scroll-mt-24 my-12 pt-8 card bg-white border-base-300 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-6">
            Menetrend
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto pb-8">
            <ScheduleTimeline />
          </div>
        </section>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <section
          id="item4"
          className="scroll-mt-24 my-8 md:my-12 pt-6 md:pt-8 card bg-white border-base-300 shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-900 mb-4 md:mb-6">
            Menü
          </h2>
          <FoodMenuCarousel />
        </section>
      </FadeInOnScroll>

      {/* RSVP Button */}
      {/*<div className="text-center mt-12">
        <button className="btn bg-[#9F2D00] border-[#9F2D00] btn-lg btn-wide text-white rounded-full hover:shadow-xl transition-all duration-200">
          Meghívás elfogadása!
        </button>
      </div>*/}
    </div>
  );
}
