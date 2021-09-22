import { Grid } from '@chakra-ui/react';
import React, {FC} from 'react';
import {useParams} from "react-router-dom";

const Blog: FC = () => {

    const params = useParams();

    return (
        <Grid gridTemplateColumns={'1fr 2fr'}>
            {params.toString()}
        </Grid>
    );
};

export default Blog;