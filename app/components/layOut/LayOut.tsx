import React, {FC} from 'react';
import { View, ScrollView } from 'react-native';
import tw from "tailwind-rn";

interface ILayout {
    isScrollView?: boolean
}

export const styleCenter = tw("h-full w-full bg-white pt-16");

const LayOut: FC<ILayout> = ({children, isScrollView = true}) => {
    return (
        <View style={styleCenter}>
            {isScrollView ? <ScrollView>{children}</ScrollView> : children}

        </View>
    );
}

export default LayOut;