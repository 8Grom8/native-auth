import React from 'react';
import { Navigation } from 'react-native-navigation';
import { AuthProvider } from './app/providers/AuthProvider';

export default function App() {
  return (
<AuthProvider>
  <Navigation/>
</AuthProvider>
  );
}

