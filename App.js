import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configureStore from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import Home from './src/screens/Home';
import RestaurantDetail from './src/screens/RestaurantDetail';
import OrderCompleted from './src/screens/OrderCompleted';

const store = configureStore();

export default function App() {

  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
