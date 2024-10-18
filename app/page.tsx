import About from "@/components/About";
import { Company } from "@/components/Company";
import { BentoDemo } from "@/components/DemoBento";
import { Footer } from "@/components/Footer";
import { HeroBullets } from "@/components/HeroBullets";
import { Info } from "@/components/Info";
import { NavbarDemo } from "@/components/Navbar";
import { Product } from "@/components/Product";
import { Service } from "@/components/Service";
import Script from "next/script";

export default function Home() {
  return (
    <>
    <NavbarDemo/>

    <HeroBullets/>

    <BentoDemo/>
    <About/>
    
    <Product/>
    
    <Company/>

    <Service/>

   <Info/>

    <Footer/>
    
    <Script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"/>
  </>
  );
}
