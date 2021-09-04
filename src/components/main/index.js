import React from 'react';
import Layout from '../../components/layout';

export default function Main({ history }) {
    const onMenuSelected = ( id ) => {
        history.push(`/${ id }`);
    }
    const onBack = () => {
        history.goBack() ;
    }

    return (
        <Layout
            title="Main"
            showMenuButton={ true }
            showBackButton={ false }
            onMenuSelected={ onMenuSelected }
            onBack={ onBack }
        />
    )
}