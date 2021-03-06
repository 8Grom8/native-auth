import React, {FC} from 'react';
import {Text,View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import { useAuth } from '../../../hooks/useAuth';
import { useProfile } from './useProfile';
import { useUpdateProfile } from './useUpdateProfile';
import LayOut from '../../layout/Layout';
import Button from '../../ui/Button';
import Field from '../../ui/Field';
import Heading from '../../ui/Heading';
import Loader from '../../ui/Loader';
import Padding from '../../ui/Padding';

const Profile: FC = () => {
    const {logout} = useAuth()
    const {isLoading: isProfileLoading,name,setName,profile}= useProfile()
    const {isLoading, updateProfile, isSuccess} = useUpdateProfile(name, profile.docId)

    return (
        <LayOut>
            <Heading text='Profile' isCenter={true}/>
            <Padding>
                {isSuccess && (
                    <View style={[tw`bg-green-500 p-3 py-2 rounded-lg`]}>
                        <Text style={[tw`text-white, text-center`]} >
                            Profile updated successfully
                        </Text>
                    </View>
                )}
                {(isProfileLoading || isLoading) ? (<Loader/>) : (
                    <>
                    <Field onChange={setName} val={name}
                    placeholder='Enter name'/>
                    <Button onPress={updateProfile} title='Update profile'/>
                    <Button onPress={logout} title='Logout' 
                    colors={['bg-gray-200', '#D6D8DB']}/>
                    </>)}
            </Padding>
        </LayOut>
    );
}

export default Profile;