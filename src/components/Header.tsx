import MidHeader from "./MidHeader";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";
import { getProductsData } from "@/lib/getData";// Replace with your fetch logic


export default async function Header() {
  const products = await getProductsData(); // Fetch products dynamically

  return (
    <header className="w-full bg-accentWhite border-b-[1px] border-b-lightText/50">
      {/* Top Header */}
      <TopHeader />

      {/* Middle Header with Products */}
      <MidHeader products={products} />

      {/* Nav Bar */}
      <NavBar />
      
    </header>
  );
}
