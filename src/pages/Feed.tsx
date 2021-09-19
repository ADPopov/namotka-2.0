import React, {FC} from 'react';
import {useTypeSelector} from "../hooks/useTypeSelector";

const Feed: FC = () => {
    const {profile} = useTypeSelector(state => state.profile);
    return (
        <div>
            {profile.username}
        </div>
    );
};

export default Feed;