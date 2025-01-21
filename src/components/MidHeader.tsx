import Container from "./Container";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import ButtonCart from "./ButtonCart";
import WishlistLink from "./WishlistLink";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  slug: { current: string };
  [key: string]: unknown; // Optional for additional fields
}

const MidHeader = ({ products }: { products: Product[] }) => {
  return (
    <div className="bg-[#f0f3f3] text-accent lg:h-14">
      <Container className="h-full flex justify-between items-center gap-10">
        <Logo />
        <SearchInput products={products} />
        <WishlistLink />
        <ButtonCart />
      </Container>
    </div>
  );
};

export default MidHeader;
