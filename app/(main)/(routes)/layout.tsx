"use client";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import "./layout.css";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarcontents = () => [
    {
      href: "Home",
      location: "/home",
    },
    {
      href: "About",
      location: "/about",
    },
    {
      href: "Project",
      location: "/Project",
    },
    {
      href: "Resume",
      location: "/Resume",
    },
  ];

  const OpenSidebar = () => {
    const sidebarbutton = document.getElementById("sidebarbutton");
    const sidebar = document.getElementById("sidebar");
    if (sidebar && sidebarbutton) {
      sidebarbutton.style.display = "none";
      sidebar.style.width = "250px";
    }
  };

  const CloseSidebar = () => {
    const sidebarbutton = document.getElementById("sidebarbutton");
    const sidebar = document.getElementById("sidebar");
    if (sidebar && sidebarbutton) {
      sidebarbutton.style.display = "block";
      sidebar.style.width = "0px";
    }
  };

  return (
    <div className="w-full h-full cursor-default">
      <div onClick={OpenSidebar}>
        <div
          className="m-3 cursor-pointer fixed top-0 left-0 z-20 text-[24px] w-[28px]"
          tabIndex={1}
          id="sidebarbutton"
        >
          &#9776;
        </div>
      </div>
      <div
        className="h-full w-0 fixed z-40 top-0 left-0 overflow-x-hidden transition-all pt-10 flex flex-col gap-5"
        id="sidebar"
      >
        <div
          className="absolute top-0 right-0 m-2 w-[36px] h-[36px] flex justify-center font-Oswald cursor-pointer text-white"
          onClick={CloseSidebar}
          tabIndex={1}
        >
          X
        </div>
        <div className="h-1/2 w-full flex items-center justify-center">
          <Image width={300} height={300} src="/league.png" alt="league of legends"></Image>
        </div>
        {sidebarcontents().map((sidebarcontent) => (
          <a
            href={sidebarcontent.location}
            key={sidebarcontent.location}
            className="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded-xl mx-2 font-Oswald cursor-pointer"
          >
            {sidebarcontent.href}
          </a>
        ))}
        <div className="absolute bottom-0 left-0 m-2">
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
        <div className="w-full h-full sidebar-background absolute bg-center bg-cover top-0 blur-md -z-30"></div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
