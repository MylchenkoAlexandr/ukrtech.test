import React from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import Layout from '../../../components/layout';
import Colors from '../../../styles/assets/colors';
import _ from '../../../styles/components/home-page';

const Styles = StyleSheet.create( _ ) ;

export default function Home({ id, history }) {
    const onMenuSelected = ( id ) => {
        history.push(`/${ id }`);
    }
    const onBack = () => {
        history.goBack() ;
    }

    return (
        <Layout
            id={ id }
            style={{
                backgroundColor: Colors.background.c,
                textColor: Colors.text.b
            }}
            title="Home page"
            showMenuButton={ true }
            showBackButton={ true }
            onMenuSelected={ onMenuSelected }
            onBack={ onBack }
        >
            <ScrollView style={ Styles.wrapper }>
                <View style={ Styles.context }>
                    <Text style={ Styles.text }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis malesuada feugiat. Sed gravida eros id interdum interdum. Donec blandit laoreet arcu ac tincidunt. Cras efficitur tempus lacus, nec sollicitudin purus imperdiet eget. Aenean tempus purus vitae erat luctus cursus. Aliquam et ipsum eu risus facilisis commodo non nec ex. Ut quis diam ut purus ultrices commodo pellentesque quis magna. Proin sollicitudin elit eget orci malesuada, eget iaculis turpis sodales. Nullam feugiat ligula placerat, mattis est quis, commodo lectus. Morbi id magna ac lacus convallis dapibus.
                        {"\n"}
                        {"\n"}
                        Curabitur sollicitudin, ligula vel interdum efficitur, sem mi pulvinar neque, fringilla condimentum metus augue eu mi. Praesent interdum nisl quis elit efficitur imperdiet. Suspendisse in dapibus mi. Vivamus aliquam condimentum purus eget tempor. Pellentesque viverra nibh a finibus finibus. Suspendisse diam ipsum, egestas nec accumsan sed, ultrices eu tortor. Morbi maximus rutrum elit eu facilisis. Aliquam tincidunt lectus sed velit porta, vitae dictum turpis placerat. Donec luctus lorem eget risus lacinia, eget ornare mi eleifend. Praesent accumsan orci dignissim justo porttitor aliquam. Integer placerat orci a maximus hendrerit. Etiam in mi molestie, elementum lacus sed, pellentesque nisl. In hac habitasse platea dictumst. Vivamus nec dui eget augue egestas malesuada. Proin non vehicula nibh.
                        {"\n"}
                        {"\n"}
                        Nunc efficitur neque eu augue auctor pulvinar. Ut vitae nunc nibh. Cras placerat efficitur tellus, sed gravida velit tincidunt in. Nunc facilisis sit amet nisl tincidunt laoreet. Integer eget aliquet turpis. Pellentesque pulvinar efficitur sapien eu vehicula. Aliquam nibh arcu, dictum quis eleifend et, congue ac nibh. Sed diam dolor, fringilla sit amet mauris ut, aliquam hendrerit augue. Quisque ac arcu vel magna posuere bibendum. Donec blandit fermentum libero, non sollicitudin sem pharetra quis. Mauris tempus, magna vulputate accumsan porttitor, erat diam consequat nisi, a feugiat purus mi et neque.
                    </Text>
                </View>
            </ScrollView>
        </Layout>
    )
}