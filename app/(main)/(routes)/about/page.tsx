export default function Page() {
  return (
    <div className="w-full h-full whole-page">
      <div className="w-full h-[5px] bg-[#1efff9] fixed top-0 scroll-progressbar transition-all"></div>
      <div className="h-fit w-full flex items-center flex-col">
        <div className="h-[300px] w-full flex justify-center items-center background-DRX-fixed relative">
          <h1 className="md:text-8xl text-4xl bg-black rounded-2xl z-10 absolute md:-bottom-14 -bottom-5">
            About Us
          </h1>
        </div>
        <div className="md:w-[90%] w-[80%] h-full md:pt-20 pt-10">
          <h1 className="text-4xl text-[#1efff9] font-bold">
            Who made the website?
          </h1>
          <p>
            The website were made by Zephrous and Che during 25 Feb 2024, it was made due to Zephrous was ob
          </p>
        </div>
      </div>
    </div>
  );
}
