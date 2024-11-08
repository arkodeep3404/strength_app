import Hero from "@/components/hero";
import Nav from "@/components/nav";
import Image from "next/image";
import apple from "@/assets/apple.png";
import android from "@/assets/android.png";
import download from "@/assets/download2.png";

export default function Root() {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-10 mt-20">
        <div className="bg-[#111111] lg:h-[453px] lg:w-[634px] rounded-3xl p-10">
          <Image src={apple} alt="apple" height={100} width={100} />
          <div className="text-white text-xl mt-5">Mobile Phone</div>
          <div className="text-white text-3xl">iOS</div>
          <div className="text-white text-xl mt-5">
            Join Strength today and take your sports experience to the next
            level. Connect with others, compete in events, and celebrate the joy
            of sports together.
          </div>
          <Image
            className="mt-5"
            src={download}
            alt="download"
            height={150}
            width={150}
          />
        </div>
        <div className="bg-[#111111] lg::h-[453px] lg:w-[634px] rounded-3xl p-10">
          <Image src={android} alt="android" height={100} width={100} />
          <div className="text-white text-xl mt-5">Mobile Phone</div>
          <div className="text-white text-3xl">Android</div>
          <div className="text-white text-xl mt-5">
            Join Strength today and take your sports experience to the next
            level. Connect with others, compete in events, and celebrate the joy
            of sports together.
          </div>
          <Image
            className="mt-5"
            src={download}
            alt="download"
            height={150}
            width={150}
          />
        </div>
      </div>
      <div className="bg-black h-20"></div>
    </div>
  );
}
