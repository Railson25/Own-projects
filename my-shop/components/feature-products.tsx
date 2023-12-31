"use client";

interface FeatureProductsProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const FeatureProducts = ({
  title,
  subtitle,
  children,
}: FeatureProductsProps) => {
  return (
    <div className="py-10 px-20 text-center bg-white max-[477px]:p-[20px]">
      {title && <h1>{title}</h1>}

      {subtitle && <p>{subtitle}</p>}

      <div className="flex justify-between pt-5 flex-wrap max-md:justify-center max-md:gap-x-[15px]">
        {children}
      </div>
    </div>
  );
};
