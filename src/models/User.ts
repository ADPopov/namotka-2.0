
export interface IComment {
    id: number,
    author: IProfile,
    createdAt: string,
    likeCount: number,
    body: string
}

export interface IPost {
    id: string,
    author: IProfile,
    createdAt: string,
    updatedAt: string,
    title: string,
    body: string,
    likes: number,
    comments: IComment[]
    viewCount: number
}

export interface IProfile {
    id: string,
    createdAt: string,
    updatedAt: string,
    avatarURL?: string,
    about: string
    username?: string,
    display_name?: string,
    followers?: IProfile[],
    following?: IProfile[],
    posts?: IPost[],
    website?: string
}