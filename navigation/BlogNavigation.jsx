import { createStackNavigator } from "@react-navigation/stack";
import InsertCategoryScreen from "../screens/InsertCategoryScreen";
import ListCategoryScreen from "../screens/ListCategoryScreen";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function BlogStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListCategoryScreen" component={ListCategoryScreen} />
      <Stack.Screen
        name="InsertCategoryScreen"
        component={InsertCategoryScreen}
      />
    </Stack.Navigator>
  );
}
const BlogNavigation = () => {
  return (
    <NavigationContainer>
      <BlogStackNavigator />
    </NavigationContainer>
  );
};
export default BlogNavigation;
