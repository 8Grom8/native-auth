import React, {FC} from 'react';
import tw from "tailwind-rn";
import {View} from 'react-native'

const Padding:  FC<{style?:any}> = ({children, style ={}}) => {
    return (
        <View style={{...tw('px-4'),...style}}> 
       {children}
    </View>
    );
}

export default Padding;