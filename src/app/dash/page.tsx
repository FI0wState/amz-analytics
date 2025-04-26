import { Inter } from "next/font/google";
import { AreaChart } from "recharts";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });    

export default function Dash() {
    return (        

    <>
        <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className={`${inter.className} flex flex-auto min-h-screen w-full items-center justify-center`}>
            <main>
                
                <section className="flex flex-col flex-grow w-full mt-50 justify-center items-center">
                    <div className="flex-col flex w-1/2  justify-center items-center pt-20">
                        <h1 className="text-3xl font-bold">AMZ Analytics</h1>
                        <input type="text" placeholder="Search ASIN" className="flex w-full border border-gray-300 rounded-md p-3 mt-8  "/>       
                    </div>
                    <div className="w-full grid xl:grid-cols-3 items-center rounded-lg p-20 gap-4 text-black  ">
                        <GridItem>Area Chart</GridItem>
                        <GridItem>Area Chart</GridItem>
                        <GridItem>Area Chart</GridItem>
                    </div>
                </section>
            </main>
          </div>
          </SidebarProvider>
        </>  
    );
}


// Utility Functions

function GridItem (props: {children: React.ReactNode}) {
    return (
        <div className="rounded-md p-40 items-center justify-center flex border border-white text-white"> 
            {props.children}
        </div>
    )
} 