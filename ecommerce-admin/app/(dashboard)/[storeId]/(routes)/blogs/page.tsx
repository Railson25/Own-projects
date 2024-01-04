import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { BlogClient } from "./_components/client";
import { BlogColumn } from "./_components/columns";

const BlogsPage = async ({ params }: { params: { storeId: string } }) => {
  const blogs = await prismadb.blog.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedBlogs: BlogColumn[] = blogs.map((item) => ({
    id: item.id,
    title: item.title,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BlogClient data={formatedBlogs} />
      </div>
    </div>
  );
};

export default BlogsPage;
