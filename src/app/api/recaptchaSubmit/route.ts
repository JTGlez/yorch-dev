import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const postData = await request.json();
  const { gRecaptchaToken } = postData;
  let res;

  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

  try {
    res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  console.log(res)

  if (res && res.data?.success && res.data?.score >= 0.3) {
    console.log("res.data?.score:", res.data?.score);

    return NextResponse.json(
      {
        success: true,
        score: res.data.score,
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
