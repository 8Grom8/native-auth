import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {FC} from 'react';
import { useAuth } from '../hooks/useAuth';
import Auth from '../components/screens/auth/Auth';
import Profile from '../components/screens/profile/Profile';
import Home from '../components/screens/home/Home';
import { NativeScreenNavigationContainer } from 'react-native-screens';

const stack = createNativeStackNavigator()

const Navigation: FC = () => {
    const{user}=useAuth()
    return (
        <NativeScreenNavigationContainer>
            <stack.Navigator screenOptions={{headerShown:false}}>
                {user ? <></> : <stack.Screen name="Auth" component={Auth}/>}
                {user ? <></> : <stack.Screen name="Home" component={Home}/>}
                {user ? <></> : <stack.Screen name="Profile" component={Profile}/>}
            </stack.Navigator>
        </NativeScreenNavigationContainer>
    );
}

export default Navigation;