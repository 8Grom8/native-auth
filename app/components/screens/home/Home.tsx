import React, {FC} from 'react';
import {Text} from 'react-native';
import LayOut from '../../layOut/LayOut';
import Header from './Header';

const Home: FC = () => {
    return (
        <LayOut>
            <Header/>
            <Text>Home</Text>
        </LayOut>
    );
}

export default Home;