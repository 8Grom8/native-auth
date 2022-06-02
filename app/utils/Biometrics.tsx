// import React from 'react';
// import { useEffect } from 'react';
// import ReactNativeBiometrics from 'react-native-biometrics';

// interface IsSensorAvailableResult {
//     available: boolean;
//     biometryType?: 'TouchID' | 'FaceID' | 'Biometrics';
//     error?: string;
// }

// const isBiometricSupport = async () => {
//     let {available, biometryType,} =
//       await ReactNativeBiometrics.isSensorAvailable();
//     let {success, error} = await ReactNativeBiometrics.simplePrompt({
//         promptMessage: 'Sign in with Touch ID',
//         cancelButtonText: 'Close',
//       });
//       console.log({success, error});
//     if (available && biometryType === ReactNativeBiometrics.TouchID) {
//       console.log('TouchID is supported', biometryType);
//     } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
//       console.log('FaceID is supported', biometryType);
//     } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
//       console.log('Biometrics is supported', biometryType);
//     } else {
//       console.log('Biometrics not supported', biometryType);
//     }
//   };
//   useEffect(() => {
//     isBiometricSupport();
//   }, []);

// export default isBiometricSupport;
