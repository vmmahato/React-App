export type HomeLink = {
    id: string; 
    title: string;
    href: string;
}

export type AboutUsLink = {
    id: string; 
    title: string;
    href: string;
}

export type SocialLink = {
    id: string;
    href: string;
    icon: React.ReactNode;
    title?: string;
}