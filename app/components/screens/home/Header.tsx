import React, {FC} from 'react';
import tw from "tailwind-rn";
import {Text, TouchableOpacity} from 'react-native'
import Padding from '../../ui/Padding';
import Avatar from '../../ui/Avatar';
import { useNavigation } from '@react-navigation/native'
import {Entypo} from '@expo/vector-icons'
import { useProfile } from '../profile/useProfile';
import Loader from '../../ui/Loader';

const Header:FC = () => {
    const {isLoading, name} = useProfile()
    const {navigate} = useNavigation()

    return isLoading ? <Loader/> : (
        <Padding style={tw('flex-raw items-center')}> 
            <Avatar name={name}/>
            <TouchableOpacity onPress={() => navigate('Profile')}
            style={tw('flex-row items-end')}>
            </TouchableOpacity>
            <Text style={tw('text-2xl text-gray-800 font-bold')}>{name}</Text>
            <Entypo name='chevron-small-right'
            sixe={28}
            style={tw('text-gray-800')}/>
        </Padding>
    );
}

export default Header;