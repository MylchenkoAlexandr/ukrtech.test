import {StatusBar} from 'react-native';
import assets from "../assets";

const { colors } = assets ;

const style = {
    container: {
        paddingTop: StatusBar.currentHeight,
        zIndex: 999,
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    wrapper: {
        paddingTop: StatusBar.currentHeight,
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundColor: colors.background.c,
        opacity: .5
    }
}

export default style ;