import assets from "../assets";

const { colors } = assets ;
const style = {
    container: {
        flex: 1,
        width: 0, // will be animated from 0 to 304px
        backgroundColor: colors.background.a,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
}

export default style ;