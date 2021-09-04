import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import _ from "../../styles/components/menu-item";
import TriangleUpIcon from "../../../assets/icons/_triangle-up.svg";
import TriangleDownIcon from "../../../assets/icons/_triangle-down.svg";
import Colors from "../../styles/assets/colors";

const Styles = StyleSheet.create(_);

export const MenuItemTypes = {
    TOP: "top",
    LEAF: "leaf"
}

export default function MenuItem({id, title, Icon, onPress, children, type = MenuItemTypes.TOP, highlighted }) {
    const ICON_COLOR = highlighted ? Colors.selected.a : Colors.icons.a ;
    const ICON_SIZE = 24;
    const [collapsed, setCollapse] = useState(false);

    const collapser = () => {
        return (
            ! collapsed
            ? <TriangleDownIcon fill={ICON_COLOR} width={10} height={5}/>
            : <TriangleUpIcon fill={ICON_COLOR} width={10} height={5}/>
        )
    }
    const onCollapse = () => setCollapse((_state) => !_state) ;
    const onMenuItemPressHandler = () => onPress && onPress({ id }) ;
    const onLinkPressed = ( rest ) => {
        console.log( "onLinkPressed([ rest ])", rest );
    }
    return (
        <View key={id} style={ type === MenuItemTypes.TOP ? Styles.container : Styles.containerLeaf }>
            <View key="wrapper" style={Styles.wrapper}>

                    <TouchableOpacity key="menu-item" style={Styles.touchable} onPress={ onMenuItemPressHandler }>
                        {Icon && (
                            <View style={Styles.iconWrapper}>
                                <Icon height={ICON_SIZE} width={ICON_SIZE} fill={ICON_COLOR}/>
                            </View>
                        )}
                        <Text style={ highlighted ? Styles.titleSelected : Styles.title  }>{title}</Text>
                    </TouchableOpacity>

                <TouchableOpacity key="collapse" style={Styles.collapser} onPress={onCollapse}>
                    {children && children.length && collapser()}
                </TouchableOpacity>
            </View>
            { children && collapsed && children }
        </View>
    )
}