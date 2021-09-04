import assets from "../assets";
import {StatusBar} from 'react-native';

const { colors } = assets ;
const style = {
    container: {
        paddingTop: StatusBar.currentHeight,
        width: "100%",
        flexDirection: "column",
        backgroundColor: colors.background.a,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    text: {
        color: colors.background.b,
    }
}

export default style ;