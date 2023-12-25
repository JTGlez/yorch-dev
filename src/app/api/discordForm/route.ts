import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

async function readStream(stream: ReadableStream<Uint8Array>): Promise<string> {
  let result = "";
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += new TextDecoder().decode(value);
  }
  return result;
}

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const rawBody = req.body ? await readStream(req.body) : null;
    const { username, email, message } = rawBody
      ? JSON.parse(rawBody.toString())
      : { username: "", email: "", message: "" };

    const body = {
      content: "¡Mensaje recibido!",
      tts: false,
      color: "white",
      embeds: [
        {
          title: "Formulario enviado",
          description: `Nombre: ${username}\nEmail: ${email}\nMensaje: ${message}`,
        },
      ],
    };

    if (!process.env.DISCORD_URL) {
      throw new Error("DISCORD_URL is not defined");
    }

    try {
      await axios.post(process.env.DISCORD_URL, body);
      return NextResponse.json(
        { message: "Message sent to Discord" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Failed to send message to Discord" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }
}
