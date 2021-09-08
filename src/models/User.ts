
export interface IComment {
    id: number,
    author: IUser,
    createdAt: string,
    likeCount: number,
    body: string
}

export interface IPost {
    id: string,
    author: IUser,
    createdAt: string,
    updatedAt: string,
    title: string,
    body: string,
    likes: number,
    comments: IComment[]
    viewCount: number
}

export interface IUser {
    id: string,
    createdAt: string,
    updatedAt: string,
    avatarURL?: string,
    username?: string,
    displayName?: string,
    followers?: IUser[],
    following?: IUser[],
    posts?: IPost[],
    website?: string
}