import React, {FC} from 'react';
import tw from "tailwind-react-native-classnames";
import {Text} from 'react-native';
import Padding from './Padding';

const Heading: FC<{text: string; isCenter?: boolean}>
= ({text,isCenter = false}) => {
    return (
        <Padding>
        <Text style={[tw`text-2xl font-bold text-gray-800
        ${isCenter ? 'text-center' : ''}`]}>
            {text}
        </Text>
        </Padding>
    );
}

export default Heading;