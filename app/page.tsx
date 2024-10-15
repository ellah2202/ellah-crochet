import { Company } from "@/components/Company";
import { Cover } from "@/components/Cover";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Info } from "@/components/Info";
import { Product } from "@/components/Product";
import { Service } from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>

    <Cover/>

    <Product/>
    
    <Company/>

    <Service/>

   <Info/>

    <Footer/>
    
    <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
  </>
  );
}
