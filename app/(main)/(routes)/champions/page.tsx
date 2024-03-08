"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { champion } from "@/api/champion/champion";

export default function ChampionPage() {
  return (
    <section className="p-4">
      <div className="grid grid-cols-4 gap-12 p-12">
        <div className="grid bg-gray-200 py-12 bg-[url('/assets/akali_cropped.jpg')] bg-cover bg-center w-72 h-72">
          <p className="text-white text-center text-7xl bg-blue-500 rounded-md hover:bg-red-500 font-sans w-72 h-20">
            Akali
          </p>
        </div>
        <div className="grid bg-gray-200 py-12 bg-[url('/assets/lux_cropped.jpg')] bg-cover bg-center w-72 h-72">
          {" "}
          {/* <Image src="/assets/akali.jpg" alt="Champion 1" width={300} height={300} /> */}
          <p className="text-white text-center text-7xl bg-blue-500 rounded-md hover:bg-red-500 font-sans w-72 h-20">
            Lux
          </p>
        </div>
        <div className="grid bg-gray-200 py-12 bg-[url('/assets/caitlyn_cropped.jpg')] bg-cover bg-center w-72 h-72">
          {" "}
          {/* <Image src="/assets/akali.jpg" alt="Champion 1" width={300} height={300} /> */}
          <p className=" text-white text-center text-7xl bg-blue-500 rounded-md hover:bg-red-500 font-sans w-72 h-20">
            Caitlyn
          </p>
        </div>
        <div className="grid bg-gray-200 py-12 bg-[url('/assets/zed_cropped.jpg')] bg-cover bg-center w-72 h-72">
          <p className="grigrid d text-white text-center text-7xl bg-blue-500 rounded-md hover:bg-red-500 font-sans w-72 h-20">
            Zed
          </p>
        </div>
        <div className="grid bg-gray-200 py-12 bg-[url('/assets/ahri_cropped.jpg')] bg-cover bg-center w-72 h-72">
          <p className="grid text-white text-center text-7xl bg-blue-500 rounded-md hover:bg-red-500 font-sans w-72 h-20">
            Ahri
          </p>
        </div>
        <div className="flex bg-gray-200 py-12 bg-[url('/assets/brand_cropped.jpg')] bg-cover bg-center w-72 h-72">
          <p className="grid text-white text-center text-7xl bg-blue-500 rounded-md hover:bg-red-500 font-sans w-72 h-20">
            Brand
          </p>
        </div>
        <div className="flex bg-gray-200 py-12 bg-[url('/assets/missfortune_cropped.jpg')] bg-cover bg-center w-72 h-72">
          <p className="grid text-white text-center text-7xl bg-blue-500 rounded-md hover:bg-red-500 font-sans w-72 h-36">
            Miss Fortune
          </p>
        </div>
        <div className="flex bg-gray-200 py-12 bg-[url('/assets/fizz_cropped.jpg')] bg-cover bg-center w-72 h-72">
          {/* <Image src="/assets/akali.jpg" alt="Champion 1" width={300} height={300} /> */}
          <p className="grid text-white text-center text-7xl bg-blue-500 rounded-md hover:bg-red-500 font-sans w-72 h-20">
            Fizz
          </p>
        </div>
      </div>
      <p>This is the bottom paragraph</p>
    </section>
  );
}
