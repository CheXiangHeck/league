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
            It was inspired by our interest for League of Legends. We both
            wanted to create a website together, which led us to the idea of
            creating a site about League of Legends. The website is made for
            showing the abilities of the characters in League of Legends,
            allowing new users to understand the skills of the characters. This
            could be helpful for the users to know enemy character kit, giving
            them to stand a chance against their enemies' attack. This website
            is a non-profit website which mean there will not have any money
            related product.
          </p>
        </div>
        <div className="md:w-[90%] w-[80%] h-full border-y-2 py-10 my-5">
          <h1 className="text-4xl text-[#1efff9] font-bold">About author</h1>
          <div className="w-full h-[400px] py-5">
            <h1 className="w-full text-5xl underline">Zephrous</h1>
            <div className="w-full h-full my-4 flex justify-center md:justify-normal">
              <img
                src="https://avatars.githubusercontent.com/u/71692327?v=4"
                className="h-[200px] w-[200px] rounded-3xl cursor-pointer border-2"
              ></img>
              <div className="w-full h-full">
                <h1></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
