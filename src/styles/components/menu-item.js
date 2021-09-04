import assets from "../assets";

const {colors} = assets;
const style = {
    container: {
        flexDirection: "column",
        width: "100%",
        backgroundColor: colors.background.a,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    containerLeaf: {
        paddingLeft: 20,
        flexDirection: "column",
        width: "100%",
        backgroundColor: colors.background.b,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    wrapper: {
        flexDirection: "row",
        width: "100%",
        height: 56,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    touchable: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
        width: "100%",
        height: "100%"
    },
    collapser: {
        alignItems: 'center',
        justifyContent: "center",
        width: 70,
        height: "100%"
    },
    collapseIcon: {
        width: 24,
        height: 24,
    },
    iconWrapper: {
        paddingLeft: 26,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 24,
        height: 24,
    },
    title: {
        color: "black",
        paddingLeft: 20,
        fontSize: 14
    },
    titleSelected: {
        color: colors.selected.a,
        paddingLeft: 20,
        fontSize: 14
    }
}

export default style;