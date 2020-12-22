import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './src/Home/'
import { Movie } from './src/Movie/'

const Stack = createStackNavigator()

const theme = {
  dark: true,
  colors: {
    primary: 'rgb(150, 150, 159)',
    background: 'rgb(150, 150, 159)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(50, 50, 50)',
    border: 'rgb(150, 150, 159)',
    notification: 'rgb(150, 150, 159)',
  },
}

function App() {
  return (
    <NavigationContainer theme={theme} style={{ paddingBottom: 100 }}>
      <Stack.Navigator style={{ paddingBottom: 100 }} initialRouteName="Cantoo Movies">
        <Stack.Screen style={{ paddingBottom: 100 }} name="Cantoo Movies" component={Home} />
        <Stack.Screen name="Movie" component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
