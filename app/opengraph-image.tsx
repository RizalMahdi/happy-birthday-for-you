import { ImageResponse } from "next/og";
import { content } from "@/lib/content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = `Happy Birthday, ${content.name}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFF5F7 0%, #FDE8EF 55%, #F8B4C8 100%)",
          color: "#4A3A40",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#EC4899",
          }}
        >
          Untuk
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 700,
            marginTop: 12,
            color: "#4A3A40",
          }}
        >
          {content.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            marginTop: 28,
            color: "#9D4A66",
          }}
        >
          Ada kejutan kecil untukmu
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            marginTop: 48,
            color: "#EC4899",
          }}
        >
          Selamat Ulang Tahun
        </div>
      </div>
    ),
    size,
  );
}
