import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import HomeStack from '@/routes/HomeStack/HomeStack';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <HomeStack />
    </NavigationContainer>
  );
}
