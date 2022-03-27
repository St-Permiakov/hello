export type TImg = {
    img: string;
    // fallback for webp, if present
    fallbackImg?: string;
    alt?: string;
    title?: string;
}

export type TDynamicItem = {
    active: boolean;
}
