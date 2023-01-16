import { useEffect, useState } from 'react';
import * as Linking from 'expo-linking';

import { useTheme } from 'native-base';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import OneSignal, { NotificationReceivedEvent, OSNotification } from 'react-native-onesignal';
import { Notification } from '../components/Notification';

const linking = {
  prefixes: ['shoesapp://', 'com.cardim.shoesapp://', 'exp+shoesapp://'],
  config: {
    screens: {
      details: {
        path: 'details/:productId',
        parse: {
          productId: (productId: string) => productId
        }
      }
    }
  }
}

export function Routes() {
  const { colors } = useTheme();
  const [notification, setNotification] = useState<OSNotification>();


  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  const deepLInking = Linking.createURL('details', {
    queryParams: {
      productId: '7'
    }
  });

  console.log(deepLInking);

  useEffect(() => {
    const unsubscribe = OneSignal.setNotificationWillShowInForegroundHandler((notificationReceivedEvent: NotificationReceivedEvent) => {
      const response = notificationReceivedEvent.getNotification();
      setNotification(response);
    });

    return () => unsubscribe;
  }, []);

  return (
    <NavigationContainer theme={theme} linking={linking}>
      <AppRoutes />
      {notification?.title && <Notification data={notification} onClose={() => setNotification(undefined)} />}

    </NavigationContainer>
  );
}