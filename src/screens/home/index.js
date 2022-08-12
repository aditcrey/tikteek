import React from "react";

import {View, Text} from 'react-native'

import Post from '../../components/Post'

const post1 = {
    id: 'p1',
    user: {
        id: 'u1',
        username: 'maxverstpn',
        image: 'https://www.formula1.com/content/fom-website/en/drivers/max-verstappen/_jcr_content/image16x9.img.1536.high.jpg'
    },
    description: 'Haha! What a godo video!',
    videoUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    song: 'Tarara',
    songImage: 'https://tfipost.com/wp-content/uploads/2018/03/daler-mehndi-biography.jpg',
    likes: 129,
    comments: 23,
    shares: 5
}

const Home = () => {
    return (
        <View>
            <Post post={post1} />
        </View>
    )
};

export default Home;