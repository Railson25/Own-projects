import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <h2 className={cn("text-3xl py-16 px-8 text-center font-bold", className)}>
      {title}
    </h2>
  );
};
