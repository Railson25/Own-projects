import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const CategorySearch = () => {
  return (
    <div className="mb-10 flex flex-col items-center gap-4">
      <h2 className="text-4xl font-bold tracking-wide">
        Search
        <span className="text-primary">Doctors</span>
      </h2>
      <p className="text-xl text-primary">
        Search your Doctor and Book appointment in one click
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2 " />
          Search
        </Button>
      </div>
    </div>
  );
};
