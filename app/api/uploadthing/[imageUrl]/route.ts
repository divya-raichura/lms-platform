import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { utapi } from "uploadthing/server";

export async function DELETE(
  req: Request,
  { params }: { params: { imageUrl: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await utapi.deleteFiles(params.imageUrl);

    console.log("successfully deleted file");

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log("IMAGE DELETE", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
