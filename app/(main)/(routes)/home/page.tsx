import { UserButton } from "@clerk/nextjs";
import "./home.css";

export default function page() {
  return (
    <div className="w-full h-full overflow-y-scroll scrollbar-hidden whole-page">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="masked-text">
          <img src="Thresh.gif" alt="Thresh"></img>
        </div>
        <p className="font-Fredoka font-extrabold text-sm text-zinc-400">
          Welcome to League
        </p>
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
}
