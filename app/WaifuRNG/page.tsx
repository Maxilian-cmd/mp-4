import { getCharacterDetails } from "@/lib/getData";


export default async function WaifuRNG() {
    const waifu = await getCharacterDetails();

    const nameStr = typeof (waifu as any).name === "string"
        ? (waifu as any).name
        : (waifu as any).name?.full ?? (waifu as any).name?.userPreferred ?? "Unknown";

    function decodeHTML(html: string): string {
        if (!html) return "";
        return html
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&apos;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&yen;/g, '¥');
    }

    return (
        <main style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Your RNG Character</h1>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                <img
                    src={String(waifu.image.large)}
                    alt={nameStr}
                    style={{ maxWidth: "70%", borderRadius: 12 }}
                />
            </div>

            <h2 style={{ marginTop: 16 }}><strong>Name: </strong>{nameStr}</h2>
            <p><strong>Origin: </strong>{waifu.anime}</p>
            <p><strong>Gender: </strong> {waifu.gender ?? "Unknown"}</p>

            <p style={{ marginTop: 12 }}>
                {decodeHTML(waifu.description ?? "No description available.")}
            </p>

            <hr style={{ margin: "1.5rem 0" }} />
        </main>
    );
}
