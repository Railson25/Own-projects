import { Modal } from "@/components/modal";
import { PriceInfoCard } from "@/components/price-info-card";
import { ProductCard } from "@/components/product-card";
import { getProductById, getSimilarProducts } from "@/lib/actions";
import { formatNumber } from "@/lib/utils";
import {
  ArrowBigDown,
  ArrowBigUp,
  BarChart4,
  Bookmark,
  Heart,
  MessageSquareMore,
  Receipt,
  Share2,
  ShoppingCart,
  Star,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface ProductDetailsProps {
  params: { id: string };
}

const ProductDetails = async ({ params: { id } }: ProductDetailsProps) => {
  const product = await getProductById(id);

  if (!product) redirect("/");

  const similarProducts = await getSimilarProducts(id);

  return (
    <div className="flex flex-col gap-16 flex-wrap px-6 md:px-20 py-24">
      <div className="flex gap-28 flex-col xl:flex-row">
        <div className="flex-grow xl:max-w-[50%] max-w-full py-16 border border-[#cdd8ff] rounded-2xl ">
          <Image
            src={product.image}
            alt={product.title}
            width={580}
            height={400}
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className=" flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] text-secondary font-semibold">
                {product.title}
              </p>
              <Link
                href={product.url}
                target="_blank"
                className="text-base text-black opacity-50"
              >
                Visit Product
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#fff0f0] rounded-xl">
                <Heart size={20} className="text-black/50" />
                <p className="text-base font-semibold text-primary">
                  {product.reviewsCount}
                </p>
              </div>
              <div className="p-2 bg-white rounded-xl">
                <Bookmark size={20} className="text-black/50" />
              </div>
              <div className="p-2 bg-white rounded-xl">
                <Share2 size={20} className="text-black/50" />
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-10 py-6 border-y border-y-[#e4e4e4]">
            <div className="flex flex-col gap-2">
              <p className="text-[34px] text-secondary font-bold">
                {product.currency} {formatNumber(product.currentPrice)}
              </p>
              <p
                className="text-[21px] text-black opacity-50
              line-through"
              >
                {product.currency} {formatNumber(product.originalPrice)}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-[#fbf3e4] rounded-[27px]">
                  <Star size={16} />
                  <p className="text-sm text-primary-orange font-semibold">
                    {product.stars || "25"}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-black/5 rounded-[27px]">
                  <MessageSquareMore size={16} />
                  <p className="text-sm text-secondary font-semibold">
                    {product.reviewsCount} Reviews
                  </p>
                </div>
              </div>
              <p className="text-sm text-black opacity-50">
                <span className="text-primary-green font-semibold">93%</span> of
                buyers have recommended this.
              </p>
            </div>
          </div>
          <div className="my-7 flex flex-col gap-5">
            <div className="flex gap-5 flex-wrap">
              <PriceInfoCard
                title="Current price"
                icon={<Receipt className="text-primary-green" />}
                value={`${product.currency} ${formatNumber(
                  product.currentPrice
                )}`}
                borderColor="border-b-primary-green"
              />
              <PriceInfoCard
                title="Average price"
                icon={<BarChart4 className="text-[#8576FF] " />}
                value={`${product.currency} ${formatNumber(
                  product.averagePrice
                )}`}
                borderColor="border-b-[#8576FF]"
              />
              <PriceInfoCard
                title="Highest price"
                icon={<ArrowBigUp className="text-primary" />}
                value={`${product.currency} ${formatNumber(
                  product.highestPrice
                )}`}
                borderColor="border-b-primary"
              />
              <PriceInfoCard
                title="Lowest price"
                icon={<ArrowBigDown className="text-primary-orange" />}
                value={`${product.currency} ${formatNumber(
                  product.lowestPrice
                )}`}
                borderColor="border-b-primary-orange"
              />
            </div>
          </div>
          <Modal productId={id} />
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl text-secondary font-semibold">
            Product Description
          </h3>
          <div className="flex flex-col gap-4">
            {product.description.split("\n")}
          </div>
        </div>
        <button className="py-4 px-4 bg-secondary hover:bg-opacity-70 rounded-[30px] text-white text-lg font-semibold w-fit mx-auto flex items-center justify-center gap-3 min-w-[200px]">
          <ShoppingCart size={22} />
          <Link href="/" className="text-base text-white">
            Buy Now
          </Link>
        </button>
      </div>

      {similarProducts && similarProducts?.length > 0 && (
        <div className="py-14 flex flex-col gap-2 w-full">
          <p className="text-secondary text-[32px] font-semibold">
            Similar products
          </p>
          <div className="flex flex-wrap gap-10 mt-7 w-full">
            {similarProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
