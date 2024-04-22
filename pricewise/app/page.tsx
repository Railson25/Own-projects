import { HeroCarousel } from "@/components/hero-carrousel";
import { ProductCard } from "@/components/product-card";
import { SearchBar } from "@/components/search-bar";
import { getAllProducts } from "@/lib/actions";
import { Product } from "@/types";
import { MoveRight } from "lucide-react";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 ">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className=" flex gap-2 text-sm font-medium text-primary">
              Smart Shopping Start Here:
              <MoveRight />
            </p>
            <h1 className="mt-4 text-6xl leading-[72px] font-bold tracking-[1.2px] text-secondary">
              Unleash the Power of{" "}
              <span className="text-primary">PriceWise</span>
            </h1>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo
              rem numquam, soluta accusamus dicta?
            </p>
            <SearchBar />
          </div>
          <HeroCarousel />
        </div>
      </section>
      <section className="flex flex-col gap-10 px-6 md:px-20 py-24">
        <h2 className="text-secondary text-[32px] font-semibold">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
