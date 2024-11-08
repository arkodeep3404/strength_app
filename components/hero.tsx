import Image from "next/image";
import download from "@/assets/download.png";
import phone from "@/assets/phone.png";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-[#111111] w-[1289px] h-[972px] mt-20 rounded-3xl flex flex-col justify-evenly items-center">
          <div className="flex flex-col justify-center items-center gap-10 w-[80%]">
            <div className="text-white text-5xl font-bold hidden lg:inline">
              The key to unlocking your sports passion is getting involved!
            </div>
            <div className="text-white text-5xl font-bold lg:hidden">
              The coolest space for all things sports!
            </div>
            <div className="text-white text-xl hidden lg:inline">
              Discover, explore, and connect with fellow enthusiasts in one of
              the largest sports communities designed to fuel your love for
              sports!.
            </div>
            <div className="text-white text-xl lg:hidden">
              The key to unlocking your sports passion is getting involved
            </div>
            <Link href="#download">
              <Image src={download} alt="download" height={250} width={250} />
            </Link>
            <Image src={phone} alt="phone" height={1000} width={1000} />
          </div>
        </div>
      </div>
    </div>
  );
}
