import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from '@/routes/HomeStack/HomeStack';

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tickets" component={HomeStack} />
    </Drawer.Navigator>
  );
}
