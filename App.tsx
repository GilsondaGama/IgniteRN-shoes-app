import { useState } from "react";
import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";


import { THEME } from "./src/theme";
import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";
import { CartContextProvider } from "./src/contexts/CartContext";

import { Notification } from "./src/components/Notification";
import { tagUserEmailCreate } from "./src/notifications/notificationsTags";

import OneSignal, { NotificationReceivedEvent, OSNotification } from "react-native-onesignal";

const { ONESIGNAL_APP_ID } = process.env;
OneSignal.setAppId(ONESIGNAL_APP_ID!);

export default function App() { 
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  const [notification, setNotification] = useState<OSNotification | null>(null);

  tagUserEmailCreate("gilsondagama@hotmail.com");

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

      <Notification title="mensagem de Notificação" onClose={() => {}}/>
    </NativeBaseProvider>
  );
}
