import { getProductById } from "@/lib/actions";
import { formatNumber } from "@/lib/utils";
import { Bookmark, Heart, Share2 } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface ProductDetailsProps {
  params: { id: string };
}

const ProductDetails = async ({ params: { id } }: ProductDetailsProps) => {
  const product = await getProductById(id);

  if (!product) redirect("/");

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
