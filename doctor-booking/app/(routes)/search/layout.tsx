import { CategoryList } from "./_components/category-list";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

function RoutesLayout({ children }: RoutesLayoutProps) {
  return (
    <div className="grid grid-cols-4">
      <div className="hidden md:block">
        <CategoryList />
      </div>
      <div className="col-span-4 md:col-span-3">{children}</div>
    </div>
  );
}

export default RoutesLayout;
