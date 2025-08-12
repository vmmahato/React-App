export type AboutUsHeader = {
    title: string;
    description: string;
}

export type AchievementWithTitle = {
    title: string;
    subtitle: string;
    achievements: Achievement[]
}

export type Achievement = {
    id: string;
    icon: React.ReactNode;
    achievementContent: AchievementContent
}

export type AchievementContent = {
    title: string;
    description: string;
}

export type TeamMember = {
    id: string;
    imageSrc: string;
    name: string;
    designation: string;
}