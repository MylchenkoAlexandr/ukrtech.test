import React, {useState} from 'react';
import Router from './src/components/router';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

export default function App() {
    const [initialized, setLoadingState] = useState(false);
    const startAsync = async () => {
        return Promise.all([
            Font.loadAsync({ Roboto: require('./assets/fonts/Roboto-Thin.ttf') }),
            Font.loadAsync({ RobotoBold: require('./assets/fonts/Roboto-Bold.ttf') }),
        ])
    }
    const onLoadingFinished = () => {
        return setLoadingState(true);
    };
    const onError = (error) => {
        console.error("App()", "onError([ error ])", error);
    };

    return (
        ! initialized
        ? <AppLoading startAsync={startAsync} onError={onError} onFinish={onLoadingFinished}/>
        : <Router/>
    )
}