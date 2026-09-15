import Image from "next/image";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "../navbar/Navbar";


export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-(--background) overflow-hidden">
      <div className="absolute left-0 top-0 xl:top-[77.5%] lg:top-[74%] lg:w-full w-[30%] min-h-screen bg-(--primary) [clip-path:polygon(0_0,65%_0,100%_100%,0_100%)] lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"></div>
      <Navbar />
      <div className="w-full min-h-screen relative z-10 items-center px-6 py-24 sm:px-10 md:px-16 lg:px-24 xl:px-40 flex">
        <div className="hidden lg:block w-1/3 rounded-2xl">
          <Image src='/yasi11.png' alt="Yasaman" width={800} height={1200} className="object-cover w-full max-w-md"/>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-center text-center lg:text-center lg:items-center px-2 sm:px-6 lg:px-10 gap-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase text-(--primary-light) font-extrabold">I'm Yasaman Mirzaei.</h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl uppercase text-(--beige) font-semibold mb-4">Front-end Developer</h2>
          <div className="w-full max-w-2xl flex flex-col gap-3">
            <p className="text-base sm:text-lg text-(--cream)">I'm a passionate Front-End Developer who loves turning ideas into modern, responsive, and engaging web experiences.</p>
            <p className="text-base sm:text-lg text-(--cream)">Always learning. Always building. Always improving.</p>
          </div>
          <div className="mt-6">
            <Link href='/about' className="inline-flex items-center gap-2 rounded-3xl border border-(--primary) px-2 py-2 text-(--beige) transition-all duration-300 hover:bg-(--primary)"><span className="flex items-center justify-center rounded-full text-(--cream)">More about me</span><FiArrowRight size={12} className="w-8 h-8 rounded-full bg-(--primary) text-(--cream)"/></Link>
          </div>
        </div>
      </div>
    </main>
  )
}
