import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import _ from "../../styles/components/menu-component";
import Menu from "./menu";

const Styles = StyleSheet.create( _ ) ;

export default function MenuComponent({ selected, visible, onPressed, onClose }) {
    if( ! visible ) return null ;
    return (
        <View style={ Styles.container } >
            <TouchableOpacity style={ Styles.wrapper } onPress={ onClose }/>
            <Menu selected={ selected } onBack={ onClose } onPressed={ onPressed } />
        </View>
    )
}