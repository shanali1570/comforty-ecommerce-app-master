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
    <div className="bg-[#f0f3f3] text-accent w-full lg:h-16 h-auto">
      <Container className="h-full flex flex-col sm:flex-row justify-between items-center gap-4 lg:gap-10 py-3 sm:py-0">
        {/* Logo */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <Logo />
        </div>

        {/* Search Input */}
        <div className="flex-1 w-full sm:w-auto">
          <SearchInput products={products} />
        </div>

        {/* Wishlist and Cart */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end items-center gap-4">
          <WishlistLink />
          <ButtonCart />
        </div>
      </Container>
    </div>
  );
};

export default MidHeader;
