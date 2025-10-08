import BannerBrand from "@/components/BannerBrand";
import BannerOffers from "@/components/BannerOffers";
import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import HotNews from "@/components/HotNews";
import MonopolyProduct from "@/components/MonopolyProduct";
import PromoSection from "@/components/PromoSection";
import RecommendedSection from "@/components/RecommendedSection";
import SearchTrend from "@/components/SearchTrend";

export default function Home() {
  return (
    <>
      <Categories />
      <PromoSection />
      <Carousel />
      <RecommendedSection />
      <MonopolyProduct />
      <BannerBrand />
      <BannerOffers />
      <HotNews />
      <SearchTrend />
    </>
  );
}
