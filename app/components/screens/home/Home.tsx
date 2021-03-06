import React, {FC} from 'react';
import {Text} from 'react-native';
import Layout from '../../layout/Layout';
import Header from './Header';

const Home: FC = () => {
    return (
        <Layout>
            <Header/>
            <Text>Home</Text>
        </Layout>
    );
}

export default Home;