import { cn } from "@/lib/utils";

interface PriceInfoCard {
  title: string;
  icon: React.ReactNode;
  value: string;
  borderColor: string;
}

export const PriceInfoCard = ({
  borderColor,
  icon,
  title,
  value,
}: PriceInfoCard) => {
  return (
    <div
      className={cn(
        `flex-1 min-w-[200px] flex flex-col gap-2 
       rounded-xl bg-black/10 px-5 py-4 border-2`,
        borderColor
      )}
    >
      <p className="text-base text-black/80">{title}</p>
      <div className="flex gap-1">{icon}</div>
      <p className="text-2xl font-bold text-secondary">{value}</p>
    </div>
  );
};
