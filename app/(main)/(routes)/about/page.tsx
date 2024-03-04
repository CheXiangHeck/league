import { QuoteIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full h-full whole-page">
      <div className="w-full h-[5px] bg-[#1efff9] fixed top-0 scroll-progressbar transition-all"></div>
      <div className="h-fit w-full flex items-center flex-col">
        <div className="h-[300px] w-full flex justify-center items-center background-DRX-fixed relative">
          <h1 className="md:text-8xl text-4xl bg-neutral-900 rounded-2xl z-10 absolute md:-bottom-14 -bottom-5">
            About Us
          </h1>
        </div>
        <div className="md:w-[90%] w-[80%] h-full md:mt-20 mt-10 my-5">
          <h1 className="text-4xl text-[#1efff9] font-bold">
            About the website
          </h1>
          <p className="mt-2">
            This website was created by Zephrous and Che on February 25, 2024.
            League of Legends has been part of our lifes and inspired us to start liking 
            and playing MOBA games. We both wanted to create a website together, which led us to the idea of
            creating a website about League of Legends. The website is made for
            showing the abilities of the characters in League of Legends,
            allowing new users to understand the skills of the characters. This
            could be helpful for the users to know enemy character kit, giving
            them to stand a chance against the enemies. This website
            is a non-profit website which mean there will not have any money
            related product.
          </p>
        </div>
        <div className="md:w-[90%] w-[80%] h-full border-y-2 py-10 my-5">
          <h1 className="text-4xl text-[#1efff9] font-bold">About author</h1>
          <div className="w-full md:h-[400px] h-[400px] py-5">
            <h1 className="w-full text-5xl underline">Zephrous</h1>
            <div className="w-full h-full my-4 flex flex-col md:flex-row items-center md:items-start">
              <img
                src="https://avatars.githubusercontent.com/u/71692327?v=4"
                className="h-[200px] w-[200px] rounded-3xl cursor-pointer border-2 my-3"
              ></img>
              <div className="w-full h-full mx-10 overflow-scroll md:overflow-hidden relative md:my-0 my-5">
                <h1 className="absolute z-10 md:w-[1000px] h-[200px] ">
                  As a software engineering student, I have been constantly and seriously learning about web development since 2021 
                  and I have been playing League of Legends since 2014
                  which is about 8 years plus. For me, league of legends is very fun with all these new metas and updates.
                  Certainly, I have love and hate relationship with League of Legends. 
                  Sometimes I get frustrated over the game and took a break from it but I always come back to LoL. 
                  More than that, League of Leends has been part of my life as well. 
                  Although I am not a ranked player (professional grinder) but I enjoy playing ARAM & events such as Ultra Rapid Fire (URF) nevertheless. 
                  As an avid LoL player, we all want to know how we can ultilize the character&apos;s abilities to the fullest.
                  Therefore, me and Che decided to create this website to help new players to understand the character&apos;s abilities.
                </h1>
                <QuoteIcon className=" text-blue-400 absolute right-0 md:mr-70 w-[80px] h-[80px]" />
              </div>
            </div>
          </div>
          <div className="w-full md:h-[400px] h-[400px] py-5">
            <h1 className="w-full text-5xl underline">Che</h1>
            <div className="w-full h-full my-4 flex flex-col items-center md:items-start md:flex-row">
              <img
                src="https://avatars.githubusercontent.com/u/138633798?s=400&v=4"
                className="h-[200px] w-[200px] rounded-3xl cursor-pointer border-2 my-3"
              ></img>
              <div className="w-full h-full mx-10 overflow-scroll md:overflow-hidden relative md:my-0 my-5">
                <h1 className="absolute z-10 md:w-[1000px] h-[200px]">
                  I am very bad at League but this website I am sure I and
                  Zephrous could make the website works well. I will try my best
                  to make the website giving users a better experience. I am not
                  a very experienced player, matter of fact I just played this
                  game for an hour. This game need a lot of experience,
                  understand of your enemy kit, prediction and others. It is
                  just too much for me to even play this game for fun so I wish
                  this website could help you guys to learn.
                </h1>
                <QuoteIcon className=" text-blue-400 absolute right-0 md:mr-70 w-[80px] h-[80px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
