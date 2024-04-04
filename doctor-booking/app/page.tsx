import { CategorySearch } from "@/components/category-search";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      <CategorySearch />
    </div>
  );
}
