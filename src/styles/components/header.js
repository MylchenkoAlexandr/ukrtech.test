const style = ({ backgroundColor, textColor }) => ({
    container: {
        height: 56,
        flexDirection: "row",
        width: "100%",
        backgroundColor,
        justifyContent: "space-between",
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2
    },
    title: {
        paddingLeft: 16,
        flex: 1,
        fontFamily: "RobotoBold",
        fontWeight: "bold",
        fontSize: 20,
        color: textColor,

    },
    touchebleLeft: {
        paddingLeft: 16,
        justifyContent: "center",
        alignItems: 'center',
        right: 0,
        width: 52,
        height: "100%"
    },
    touchebleRight: {
        paddingRight: 16,
        justifyContent: "center",
        alignItems: 'center',
        height: "100%",
        right: 0,
        width: 40
    }
});

export default style ;