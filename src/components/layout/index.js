import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../header';
import Colors from '../../styles/assets/colors';
import _ from '../../styles/components/main';
import Menu from '../../components/menu';

const Styles = StyleSheet.create( _ ) ;

export default function Layout({
    /* String */ id,
    /* Array */ children,
    /* String */ title = "",
    /* Object */ style = {
        /* String */ backgroundColor: Colors.background.a,
        /* String */ textColor: Colors.text.a
    },
    /* Boolean */ showBackButton = true,
    /* Boolean */ showMenuButton = false,
    /* Function */ onBack = () => ({}),
    /* Function */ onMenuSelected = ( id ) => console.log( id )
}) {
    const [ menuVisible, setMenuVisibility ] = useState(false);
    const [ menuSelection, setMenuSelection ] = useState( id );

    const applyMenuVisibility = ( visible ) => {
        if( visible === undefined ) setMenuVisibility( ( prev ) => ! prev )
        else setMenuVisibility( visible ) ;
    }
    const applyMenuSelection = ( selection ) => {
        if( menuSelection !== selection ) setMenuSelection( selection ) ;
    }

    const onPressed = ({ id }) => {
        applyMenuSelection( id );
        applyMenuVisibility() ;
        onMenuSelected && onMenuSelected( id );
    }
    const onMenuClosed = () => {
        applyMenuVisibility( false ) ;
    }

    return (
        <>
            <Menu
                selected={ menuSelection }
                visible={ menuVisible }
                onPressed={ onPressed }
                onClose={ onMenuClosed }
            />
            <View style={ Styles.container }>
                <Header
                    title={ title }
                    showBackButton={ showBackButton }
                    showMenuButton={ showMenuButton }
                    backgroundColor={ style.backgroundColor }
                    textColor={ style.textColor }
                    onMenu={ applyMenuVisibility }
                    onBack={ onBack }
                />
            </View>
            { children }
        </>
    )
}