import { BenefitsCard, FeatureCard } from "@/components/cards";
import { CategorySection } from "@/components/categories";
import { Header } from "@/components/header";
import { News } from "@/components/news";
import { Products } from "@/components/products";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
   <>
    <Header/>
    <BenefitsCard/>
    <CategorySection/>
    <Products/>
    <News/>

   </>
    
  )
}