import { NextRequest, NextResponse } from "next/server";

const example = {
  rows: [
    {
      id: 1,
      name: "Test 1",
    },
    {
      id: 2,
      name: "Test 2",
    },
    {
      id: 3,
      name: "Test 3",
    },
    {
      id: 4,
      name: "Test 4",
    },
    {
      id: 5,
      name: "Test 5",
    },
  ],
};

export async function GET(req: NextRequest, res: NextResponse) {
  const promiseResponse = new Promise((resolve) => {
    setTimeout(() => {
      resolve("example");
    }, 1500);
  });
  const result = await promiseResponse;

  return NextResponse.json(example);
}
