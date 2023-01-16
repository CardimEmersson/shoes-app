import OneSignal from 'react-native-onesignal';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';
import { tagUserInfoCreate } from './src/notifications/notificationsTags';

import { CartContextProvider } from './src/contexts/CartContext';
import { useEffect } from 'react';

OneSignal.setAppId('e186df65-d202-4a1c-b5c8-314c9b93921b');
OneSignal.setEmail("emerssonmota123@gmail.com");

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfoCreate("Emersson", "emerssonmota123@gmail.com");

  useEffect(() => {
    const unsubscribe = OneSignal.setNotificationOpenedHandler((response) => {
      console.log(response);

      const {actionId} = response.action as any;

      switch(actionId) {
        case '1':
          return console.log('Ver todas');
        case '2':
          return console.log('Ver pedido');
        default:
          return console.log('Não foi clicado em nenhuma ação');
      };
    });

    return () => unsubscribe;
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>

    </NativeBaseProvider>
  );
}