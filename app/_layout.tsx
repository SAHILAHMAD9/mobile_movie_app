import { Stack } from "expo-router";
import "./global.css"
export default function RootLayout() {
  return <Stack >
      <Stack.Screen
      name="(tabs)"
      options={{headerShown: false}} // hidding the root route header eg (tabs)
      >
      </Stack.Screen>
      <Stack.Screen
      name="movies/[id]"
      options={{headerShown: false}}>

      </Stack.Screen>
  </Stack>;
}
