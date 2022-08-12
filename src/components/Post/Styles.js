import {StyleSheet, Dimensions} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    videoPlayButton: {
        position: 'absolute',
        top: 0, 
        left: 0,
        bottom: 0, 
        right: 0,
        zIndex: 100
    },
    video: {
        position: 'absolute',
        top: 0, 
        left: 0,
        bottom: 0, 
        right: 0,
        // transform: [{scale: 4}]
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end',
    },
    rightContainer: {
        alignSelf: 'flex-end',
        height: 350,
        justifyContent: 'space-between',
        marginRight: 5
    },
    bottomContainer: {
        padding: 10

    },
    handle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        marginLeft: 10

    },
    description: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '300',
        left: 10,
        marginBottom: 2

    },
    songName: {
        color: '#fff',
        fontSize: 15


    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    profilePictureContainer: {
        padding:1

    },
    profilePicture: {
        width: 50, 
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#fff"

    },
    iconContainer: {
        padding: 10,
        alignItems: 'center'

    },
    statsLabel: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 2
    },
    songImage: {
        width: 40, 
        height: 40,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: "#fff",
        
    }
});

export default styles;