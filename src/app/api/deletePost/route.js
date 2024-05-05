import { getAuthSession } from '@/utils/auth';

import prisma from "@/utils/connect";

import { NextResponse } from "next/server";

export const POST = async (req) => {
  const session = await getAuthSession(); // verifying user
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated" }, { status: 401 })
    );
  }

  try {
    const { postId } = await req.json();

    // Check if the post exists and if the user is authorized to delete it
    const post = await prisma.post.findUnique({
      where: { id: postId }, // Use the id field as the identifier
      select: { userEmail: true },
    });

    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "Comment not found" }, { status: 404 })
      );
    }

    if (post.userEmail !== session.user.email) {
      return new NextResponse(
        JSON.stringify({ message: "Unauthorized" }, { status: 401 })
      );
    }

    // Perform the post deletion
    await prisma.post.delete({
      where: { id: postId }, // Use the id field as the identifier
    });
    return new NextResponse(
      JSON.stringify(
        { message: "Comment deleted successfully" },
        { status: 200 }
      )
    );

  } catch (err) {
    console.error(err.message);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};