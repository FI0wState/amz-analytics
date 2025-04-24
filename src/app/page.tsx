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
        <h1 className="text-4xl font-bold">
          Coming Soon
        </h1>
          </section>
      </main>
    </div>
    </>
  );
}