import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Head from "next/head";


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
    <div className='flex min-h-screen w-full items-center justify-center'>  
      <main>
        <section>
        <h1 className="text-2xl text-center font-bold">
          Coming Soon
        </h1>
        <h1 className='text-5xl font-bold'>
        Real-Time Amazon Data. No Bloat.
        </h1>
        <div className="flex flex-row-reverse justify-center  items-center gap-4">
        <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 ml-2">
            Sign up for our waitlist.
          </button>
          <input type="text" placeholder="Enter your email" className="border border-gray-300 rounded-md p-2 mt-4 flex flex-auto items-center" />
        </div> 
          </section>
      </main>
    </div>
    </>
  );
}