import React from 'react';
import {Text} from 'react-native';
import Layout from '../../../components/layout';

export default function Any({ id, history }) {
    const onMenuSelected = ( id ) => {
        history.push(`/${ id }`);
    }
    const onBack = () => {
        history.goBack() ;
    }

    return (
        <Layout
            id={ id }
            title={ `Custom "${ id }" page` }
            showMenuButton={ true }
            showBackButton={ true }
            onMenuSelected={ onMenuSelected }
            onBack={ onBack }
        >
            {/* any context */}
        </Layout>
    )
}