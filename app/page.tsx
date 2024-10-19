import About from "@/components/About";
import { Contact } from "@/components/Contact";
import { BentoDemo } from "@/components/DemoBento";
import { Footer } from "@/components/Footer";
import { HeroBullets } from "@/components/HeroBullets";
import { NavbarDemo } from "@/components/Navbar";
import { Step } from "@/components/Step";
import Script from "next/script";

export default function Home() {
  return (
    <>
    
    <NavbarDemo/>

    <HeroBullets/>
    
    <About/>

    <BentoDemo/>

    <Step/>
  
    <Contact/>
  
    <Footer/>
    
    <Script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"/>
  </>
  );
}