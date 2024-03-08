import { UserButton } from "@clerk/nextjs";
import "./home.css";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-hidden whole-page scroll-smooth snap-both snap-mandatory cursor-default">
      <div className="w-full h-[5px] bg-[#1efff9] fixed top-0 scroll-progressbar transition-all"></div>
      <div className="w-full h-full flex flex-col justify-center items-center relative snap-center">
        <div className="flex flex-col items-center">
          <div className="masked-text mt-10">
            <Image
              src="/Thresh.gif"
              alt="Thresh"
              width={500}
              height={500}
              priority={true}
            />
          </div>
          <p className="font-Fredoka font-extrabold text-sm text-zinc-400 mb-20 -mt-20 z-1">
            Welcome to League
          </p>2 
        </div>
        <div className="flex flex-col absolute bottom-0 mb-5 items-center">
          <h1 className="text-sm font-extrabold">Scroll Down</h1>
          <p className="text-5xl">&#11147;</p>
        </div>
      </div>
      <div className="w-full h-full snap-center relative p-5 flex items-center justify-between">
        <div className="w-full h-full absolute backgroundforchr -z-10 -left-2"></div>
        <div>
          <h1 className="font-Comfortaa font-extrabold text-xl md:text-6xl">
            Character Introduction
          </h1>
          <p className="md:text-xl font-Oswald text-[#1efff9] font-bold mb-16">
            Learn about the character
          </p>
          <Link
            href="/"
            className="p-5 bg-[#1efff9] md:text-base text-sm font-Comfortaa font-bold Link-Button cursor-pointer"
          >
            Character
          </Link>
        </div>
        <div className="md:w-1/2 md:h-2/3 absolute right-0 -z-10 maskcharacterimage">
          <Image
            className="w-full h-full"
            src="/Thresh.gif"
            alt="Thresh"
            width={500}
            height={500}
            priority={true}
          />
        </div>
      </div>
      <div className="w-full h-full flex gap-5 p-5 relative justify-center snap-center">
        <div className="w-[70%] h-full flex flex-col justify-center gap-4">
          <h1 className="text-6xl font-extrabold">News</h1>
          <div className="md:h-[30%] w-full">Content here</div>
          <Link
            href="/news"
            className="Link-Button w-fit p-3 flex cursor-pointer"
          >
            Check Out
          </Link>
        </div>
        <div className="w-[30%] h-full flex items-center">
          <Image
            className="w-full h-1/2"
            alt="News Image"
            src="/Thresh.gif"
            width={500}
            height={500}
            priority={true}
          />
        </div>
        <div className="absolute bottom-12">
          <button
            type="button"
            className=" w-3 h-3 DotButton rounded-full cursor-pointer"
          ></button>
        </div>
      </div>
      <div className="w-full h-full snap-center flex items-center justify-center">
        <div className="w-[350px] h-[450px] text-black flex flex-col justify-center items-center rounded-3xl bg-white p-10 gap-10">
          <Image
            src="/LeagueLogo.png"
            alt="Logo"
            className=""
            width={500}
            height={500}
            priority={true}
          />
          <h1 className="text-4xl font-extrabold">League</h1>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-5">
              <label className="font-bold">Name: </label>
              <input
                placeholder="Name..."
                className="w-[150px] rounded-lg px-2"
              />
            </div>
            <div className="flex gap-6">
              <label className="font-bold">Email: </label>
              <input
                placeholder="Email..."
                className="w-[150px] rounded-lg px-2"
              />
            </div>
            <button
              type="button"
              className="bg-[#1efff9] w-fit text-white font-bold p-3 Link-Button after:border-zinc-400 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
