import React, { useRef, useEffect } from 'react';
import {StyleSheet, SafeAreaView, Animated, Easing} from 'react-native';
import _ from "../../styles/components/menu";
import Header from "../header";
import MenuItem, {MenuItemTypes} from "./menuItem";
import Colors from "../../styles/assets/colors";
import SectionsModel from "../../models/menu";

const Styles = StyleSheet.create(_);

const factory = ({model, onPress, selected}, collection = []) => {
    for (let item of model) {
        const {id, title, Icon, children, leaf} = item;
        const props = {
            key: id,
            type: leaf ? MenuItemTypes.LEAF : MenuItemTypes.TOP,
            id,
            title,
            Icon,
            onPress,
            highlighted: selected === id
        };

        ! children || ! children.length
        ? collection.push(<MenuItem {...props}/>)
        : collection.push(<MenuItem {...props}>{factory({model: children, onPress, selected}, [])}</MenuItem>);

    }
    return collection;
}

export default function Menu({ selected, onPressed, onBack }) {
    const items = factory({model: SectionsModel, onPress: onPressed, selected});
    const animator = useRef(new Animated.Value(1)).current;
    const increaseWidth = () => {
        Animated.timing(animator, {
            toValue: 304,
            duration: 500,
            easing: Easing.bounce,
            useNativeDriver: false
        }).start();
    };

    useEffect( increaseWidth ) ;

    const animationParams = {
        width: animator
    } ;

    return (
            <Animated.View style={[ Styles.container, animationParams ]}>
                <Header
                    title="Menu"
                    backgroundColor={Colors.background.c}
                    textColor={Colors.text.b}
                    showMenuButton={false}
                    onBack={ onBack }
                />
                {items}
            </Animated.View>
    )
}