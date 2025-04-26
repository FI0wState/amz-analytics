import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Head from "next/head";
import { FormInput } from "lucide-react";
import Footer from "./components/footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<>
  <Head>
    <title>
        My App
    </title>
      <meta name="description" content="My App" />
      <link rel="icon" href="/favicon.ico" />
  </Head>

    <Navbar />

    <div>
      <main className="flex min-h-screen p-24 pr-40 pl-40 justify-center">
        

        
        {/* Hero Section */}
        <section className='flex flex-col flex-grow w-full mt-50 justify-center items-center'>
        <div>
        <h1 className="text-lg text-center">
          Coming Soon
        </h1>
        <h1 className='text-5xl font-bold text-center'>
          <span className='text-teal-400'>Real-Time </span> Amazon Data. <br/> No Bloat. 
        </h1>
        <div className="flex flex-row-reverse gap-4 items-center mt-8">
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 ml-2">
          Join our waitlist!
        </button>
          <input type="text" placeholder="Enter your email" className="flex flex-grow border border-gray-300 rounded-md p-2 " />      
        </div>
        </div>
        <div className=" flex w-6xl mt-20 border border-white rounded-md pt-80 pb-80 ">
        </div> 
        </section>

      </main>
    </div>

    <Footer />

    </>
  );
}

