import Banner from "@/components/Banner";
import BannerCategories from "@/components/BannerCategories";
import Container from "@/components/Container";

import BrandCompany from "@/components/BrandCompany";
import Facilities from "@/components/Facilities";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <Container className="py-10 ">
      
      <Banner/>
        <Facilities />
        <BannerCategories />
        
        <BrandCompany/>
        <ProductList/>
      
        

    </Container>
  );
}
