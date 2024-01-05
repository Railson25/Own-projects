import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { title, imageUrl, description, date } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!imageUrl) {
      return new NextResponse("Image URL is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const blog = await prismadb.blog.create({
      data: {
        title,
        description,
        date,
        imageUrl,
        storeId: params.storeId,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.log("[BLOGS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const blogs = await prismadb.blog.findMany({
      where: {
        storeId: params.storeId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(blogs, { headers: corsHeaders });
  } catch (error) {
    console.log("[BLOGS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
