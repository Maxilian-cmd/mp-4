import Link from "next/link";


export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 48, marginBottom: 16 }}>Character RNG</h1>
        <Link
          href="/WaifuRNG"
          style={{
            display: "inline-block",
            padding: "0.8rem 1.4rem",
            borderRadius: 10,
            background: "#222",
            color: "#fff",
            border: "1px solid #222",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          GO
        </Link>
      </div>
    </main>
  );
}
