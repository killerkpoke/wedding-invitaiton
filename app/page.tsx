import FadeInOnScroll from "@/components/FadeInOnScroll";
import FoodCard from "@/components/FoodCard";
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
    <div className="max-w-4xl mx-auto text-center">
      {/* Hero Header */}

      <ViewTransition name={`photo-1`} share="morph">
        <div id="item1" className="scroll-mt-24 hover-3d cursor-pointer mb-18 animate-fade-in">
          <div className="card bg-white text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
            <div className="card-body">
              <Image
                src="/sketch_2_weeding_inv.png"
                alt="Hero"
                width={1920}
                height={1080}
                loading="eager"
              />
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
        <section id="item2" className="scroll-mt-24 mt-24 pt-8 card bg-white text-base-content border-base-200 shadow-xl">
          <div className="grid md:grid-cols-1 gap-6 mb-6">
            <div className="text-center">
              <p className="text-3xl font-semibold text-orange-900 mb-8">
                Ceremónia | Szállás <i>(opciónális)</i>
              </p>
              <p className="text-lg text-orange-600 mt-4">
                Öreg Tölgy Kastély-Fogadó
              </p>
              <p className="text-lg text-orange-600 mt-4 mb-8">
                Pusztazámor, Kossuth Lajos u. 22
              </p>
              <MapEmbed />
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* Schedule Section */}
      <FadeInOnScroll>
        <section id="item3" className="scroll-mt-24 my-12 pt-8 card bg-white border-base-300 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-6">
            Menetrend
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto pb-8">
            <div className="flex items-center card bg-[#c3b091] shadow-sm p-4">
              <div className="badge bg-[#9F2D00] border-[#9F2D00] text-white px-3 py-1 rounded-md text-sm font-semibold mr-4">
                12:00 PM
              </div>
              <div>
                <p className="font-medium text-white">Előgyülekezés</p>
                <p className="text-sm text-white">
                  Italozás és nasi a családdal és barátokkal
                </p>
              </div>
            </div>
            <div className="flex items-center card bg-[#c3b091] shadow-sm p-4">
              <div className="badge bg-[#9F2D00] border-[#9F2D00] text-white px-3 py-1 rounded-md text-sm font-semibold mr-4">
                14:00 PM
              </div>
              <div>
                <p className="font-medium text-white">Ceremónia</p>
                <p className="text-sm text-white">
                  Italozás és nasi a családdal és barátokkal
                </p>
              </div>
            </div>
            <div className="flex items-center card bg-[#c3b091] shadow-sm p-4">
              <div className="badge bg-[#9F2D00] border-[#9F2D00] text-white px-3 py-1 rounded-md text-sm font-semibold mr-4">
                19:00 PM
              </div>
              <div>
                <p className="font-medium text-white">Vacsora</p>
                <p className="text-sm text-white">
                  Esti vacsora a családdal és barátokkal
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <section id="item4" className="scroll-mt-24 my-12 pt-8 card bg-white border-base-300 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-orange-900 mb-6">
            Menü
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <h4 className="col-span-3 text-xl font-bold text-center text-orange-900 mb-6">
              Vendég váró
            </h4>
            <FoodCard
              foodName="Francia hagyma leves"
              foodImage="/sketch_2_weeding_inv.png"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <h4 className="col-span-3 text-xl font-bold text-center text-orange-900 mb-6">
              Leves
            </h4>
            <FoodCard
              foodName="Francia hagyma leves"
              foodImage="/sketch_2_weeding_inv.png"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <h4 className="col-span-3 text-xl font-bold text-center text-orange-900 mb-6">
              Főétel
            </h4>
            <FoodCard
              foodName="Francia hagyma leves"
              foodImage="/sketch_2_weeding_inv.png"
            />
            <FoodCard
              foodName="Francia hagyma leves"
              foodImage="/sketch_2_weeding_inv.png"
            />
            <FoodCard
              foodName="Francia hagyma leves"
              foodImage="/sketch_2_weeding_inv.png"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <h4 className="col-span-3 text-xl font-bold text-center text-orange-900 mb-6">
              Desszert
            </h4>
            <FoodCard
              foodName="Francia hagyma leves"
              foodImage="/sketch_2_weeding_inv.png"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <h4 className="col-span-3 text-xl font-bold text-center text-orange-900 mb-6">
              Éjféli menü
            </h4>
            <FoodCard
              foodName="Francia hagyma leves"
              foodImage="/sketch_2_weeding_inv.png"
            />
          </div>
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
