import React, {FC} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';
import Auth from '../components/screens/auth/Auth';
import Profile from '../components/screens/profile/Profile';
import Home from '../components/screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
    const {user} = useAuth()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                {user ? (
                <> 
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Profile" component={Profile}/>
                </>
                ) : (
                    <Stack.Screen name="Auth" component={Auth}/>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;