import { Fact, Waifu, FactWithWaifu } from "@/app/components/interfaces";
const API_KEY = process.env.KOHAI_API_KEY;
const BIN_URL = "https://waifu.it/api/v4";

function ensureApiKey(key: string | undefined): asserts key is string {
    if (!key) throw new Error("KOHAI_API_KEY is missing");
}

export async function getFact(): Promise<Fact> {
    ensureApiKey(API_KEY);
    const res = await fetch(`${BIN_URL}/fact`, {
        headers: { Authorization: API_KEY! },
    });
    if (!res.ok) throw new Error(`Fact fetch failed: ${res.status}`);
    return res.json();
}

export async function getWaifu(params?: { name?: string; anime?: string }): Promise<Waifu> {
    ensureApiKey(API_KEY);
    const url = new URL(`${BIN_URL}/waifu`);
    if (params?.name) url.searchParams.set("name", params.name);
    if (params?.anime) url.searchParams.set("anime", params.anime);

    const res = await fetch(url, {
        headers: { Authorization: API_KEY! },
    });
    if (!res.ok) throw new Error(`Waifu fetch failed: ${res.status}`);
    return (await res.json()) as Waifu;
}

export async function getCharacterDetails(params?: { name?: string; anime?: string }): Promise<Pick<Waifu, 'name' | 'description' | 'age' | 'gender' | 'image' | 'anime'>> {
    const data = await getWaifu(params);
    return {
        name: data.name,
        description: data.description,
        age: data.age ?? 0,
        gender: data.gender ?? 'Unknown',
        image: data.image,
        anime: (data).anime ?? (data).media?.nodes?.[0]?.title?.userPreferred,
    };
}

export async function getFactWithWaifu(): Promise<FactWithWaifu> {
    const fact = await getFact();
    const waifu = await getWaifu();
    return { fact, waifu };
}
