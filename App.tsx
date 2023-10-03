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


import OneSignal from "react-native-onesignal";

import {REACT_APP_ONE_SIGNAL_ID_ANDROID} from '@env'

OneSignal.setAppId(REACT_APP_ONE_SIGNAL_ID_ANDROID);


// OneSignal.setAppId(REACT_APP_ONE_SIGNAL_ID_ANDROID!);

// OneSignal.initialize(REACT_APP_ONE_SIGNAL_ID_ANDROID!);

// OneSignal.Notifications.requestPermission(true)


export default function App() { 
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  // const [notification, setNotification] = useState<OSNotification | null>(null);
  // tagUserEmailCreate("gilsondagama@hotmail.com");

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

      <Notification title={"Mensagem enviada"} onClose={() => {}}/>
    </NativeBaseProvider>
  );
}
