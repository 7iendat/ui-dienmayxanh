import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import MonopolyProduct from "@/components/MonopolyProduct";
import PromoSection from "@/components/PromoSection";
import RecommendedSection from "@/components/RecommendedSection";

export default function Home() {
  return (
    <>
      <Categories />
      <PromoSection />
      <Carousel />
      <RecommendedSection />
      <MonopolyProduct />
    </>
  );
}
