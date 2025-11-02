export interface Waifu {
    _id: number;
    name: string;
    image: {
        large: string;
    };
    favourites: number;
    siteUrl: string;
    description: string;
    age: number;
    gender: string;
    bloodType: string;
    dateOfBirth: {
        year: number;
        month: number;
        day: number;
    };
    media: {
        nodes: {
            id: number;
            idMal: number;
            coverImage: { medium: string };
            bannerImage: string;
            title: {
                romaji?: string;
                english?: string;
                native?: string;
                userPreferred: string;
            };
            popularity: number;
            type: string;
            format: string;
        }[];
    };
    anime: string;
    url: string;
}

export interface Fact {
    _id: number;
    tags: string[];
    fact: string;
}

export interface FactWithWaifu {
    fact: Fact;
    waifu: Waifu;
}