import { HomeStackParamListType } from '@/lib/Types/HomeStackParamListType/HomeStackParamListType';
import DetailsScreen from '@/screens/DetailsScreen/DetailsScreen';
import HomeScreen from '@/screens/HomeScreen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator<HomeStackParamListType>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Tickets', headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ navigation }) => ({
          title: 'Details',
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
