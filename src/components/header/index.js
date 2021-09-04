import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import headerColorTheme from '../../styles/components/header';
import MenuIcon from '../../../assets/icons/_menu.svg';
import ShapeIcon from '../../../assets/icons/_shape.svg';
import Colors from '../../styles/assets/colors';

export default function Header({
                                   /* String */ title = "",
   /* String */ backgroundColor = Colors.background.a,
   /* String */ textColor = Colors.text.a,
   /* Boolean */ showBackButton = true,
   /* Boolean */ showMenuButton = true,
   /* Function */ onMenu = () => ({}),
   /* Function */ onBack = () => ({})
}) {
    const Styles = StyleSheet.create(headerColorTheme({backgroundColor, textColor}));
    return (
        <View style={Styles.container}>
            {showBackButton && (
                <TouchableOpacity style={Styles.touchebleLeft} onPress={onBack}>
                    <ShapeIcon height="16" fill={textColor}/>
                </TouchableOpacity>
            )}
            <Text style={Styles.title}>{title}</Text>
            {showMenuButton && (
                <TouchableOpacity style={Styles.touchebleRight} onPress={onMenu}>
                    <MenuIcon height="16" fill={textColor}/>
                </TouchableOpacity>
            )}
        </View>
    )
}