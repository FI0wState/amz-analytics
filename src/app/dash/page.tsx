import { Inter } from "next/font/google";
import { AreaChart } from "recharts";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });    

export default function Dash() {
    return (



        <div className={`${inter.className} flex min-h-screen w-full items-center justify-center`}>
           <Navbar/ > 
            <main>
                <section>
                    <div className="flex justify-center items-center">
                        <h1 className="text-3xl font-bold">
                            AMZ Analytics
                        </h1>
                    </div>
                    <div className="w-screen grid xl:grid-cols-3 items-center rounded-lg p-20 gap-4 text-black  ">
                        <GridItem>Area Chart</GridItem>
                        <GridItem>Area Chart</GridItem>
                        <GridItem>Area Chart</GridItem>
                    </div>
                </section>
            </main>
        </div>
    )
}








// Utility Functions

function GridItem (props: {children: React.ReactNode}) {
    return (
        <div className="rounded-lg p-40 items-center justify-center flex border border-white text-white"> 
            {props.children}
        </div>
    )
} 