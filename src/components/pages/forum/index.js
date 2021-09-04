import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Layout from '../../../components/layout';
import Colors from "../../../styles/assets/colors";
import _ from '../../../styles/components/forum-page';

const Styles = StyleSheet.create( _ ) ;

export default function Forum({ id, history }) {
    const onMenuSelected = ( id ) => {
        history.push(`/${ id }`);
    }
    const onBack = () => {
        history.goBack() ;
    }

    return (
        <Layout
            id={ id }
            title="Forum"
            style={{
                backgroundColor: Colors.background.c,
                textColor: Colors.text.b
            }}
            showMenuButton={ true }
            showBackButton={ true }
            onMenuSelected={ onMenuSelected }
            onBack={ onBack }
        >
            <ScrollView style={ Styles.wrapper }>
                <View style={ Styles.context }>
                    <Text style={ Styles.text }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis malesuada feugiat. Sed gravida eros id interdum interdum. Donec blandit laoreet arcu ac tincidunt. Cras efficitur tempus lacus, nec sollicitudin purus imperdiet eget.
                    </Text>
                </View>
            </ScrollView>
        </Layout>
    )
}