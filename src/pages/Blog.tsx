import React, {FC} from 'react';
import {IPost, IUser} from "../models/User";

export type User = {
    id?: string,
    createdAt?: string,
    updatedAt?: string,
    avatarURL?: string,
    username?: string,
    displayName?: string,
    followers?: IUser[],
    following?: IUser[],
    posts?: IPost[],
    website?: string
}

const Blog: FC = () => {
    return (
        <div>

        </div>
    );
};

export default Blog;