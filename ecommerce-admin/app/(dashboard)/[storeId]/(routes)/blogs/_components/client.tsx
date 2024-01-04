"use client";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { BlogColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/api-list";

interface BlogClientProps {
  data: BlogColumn[];
}

export const BlogClient = ({ data }: BlogClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Blogs (${data.length})`}
          description="Manage blogs for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/blogs/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="title" />
      <Heading title="Api" description="API calls for blogs" />
      <Separator />
      <ApiList entityName="blogs" entityIdName="blogId" />
    </>
  );
};
