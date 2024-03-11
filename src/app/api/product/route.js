import { NextResponse } from "next/server";
const product = [
  {
    name: "hi",
  },
];
export async function GET() {
  try {
    return NextResponse.json(product);
  } catch (error) {
    // Handle errors and log the details
    console.error("Error in GET request:", error);

    // Return an error response with a 500 status code
    return NextResponse.error({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
