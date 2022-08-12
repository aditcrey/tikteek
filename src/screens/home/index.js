import React from "react";

import {View, FlatList, Dimensions} from 'react-native'

import Post from '../../components/Post'

import posts from '../../../data/posts.js'

const Home = () => {
    return (
        <View>
          {/* <Post post={posts[2]} /> */}
          <FlatList 
          data={posts}
          renderItem = {({item}) => <Post post={item}/>}
          showsVerticalScrollIndicator = {false}
          snapToInterval = {Dimensions.get('window').height}
          snapToAlignment = {"start"}
          decelerationRate = {"fast"}
          />
        </View>
    )
};

export default Home;