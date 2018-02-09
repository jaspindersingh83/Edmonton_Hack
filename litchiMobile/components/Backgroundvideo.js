import React, {Component} from 'react';
import {View, StyleSheet,Text, Dimensions} from 'react-native';
import { Video } from 'expo'


class Backgroundvideo extends Component {

    render(){
        return(
            <View style={styles.backgroundVideo}>
                <Video 
                    source={{ uri: 'https://s3-us-west-1.amazonaws.com/elasticbeanstalk-us-west-1-834181891871/Background_Video/Back_video2.mp4' }}
                    style={{
                        opacity: 0.8,
                        width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
                        shouldPlay={true}
                        resizeMode="cover"
                        isLooping={true}
                        isMuted={true}
                    />
            </View>
        )
    }
};

// this.player.presentFullscreenPlayer()
var styles = StyleSheet.create({
    backgroundVideo: {
        ...StyleSheet.absoluteFillObject,
    },
  });

export default Backgroundvideo;