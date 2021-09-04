import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeRouter} from "react-router-native";
import {StatusBar} from 'expo-status-bar';
import _ from '../../styles/components/router';
import Routes from "./routes";

const Styles = StyleSheet.create(_);

export default function Router() {
    return (
        <NativeRouter>
            <StatusBar style="auto" barStyle="dark-content"/>
            <View style={Styles.container}>
                <Routes/>
            </View>
        </NativeRouter>
    )
}

