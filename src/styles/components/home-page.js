import assets from "../assets";

const { colors } = assets ;
const style = {
    wrapper: {
        flex: 1,
        paddingTop: 22,
        width: "100%",
        height: "100%",
        backgroundColor: colors.background.d
    },
    context: {
        padding: 29,
        backgroundColor: colors.background.c,
        width: "100%",
        height: "100%",
        borderRadius: 20
    },
    text: {
        color: colors.text.b,
        fontSize: 14
    }
}

export default style ;