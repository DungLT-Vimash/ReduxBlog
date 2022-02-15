import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import BlogNavigation from "./navigation/BlogNavigation";
import categoryReducer from "./store/reducers/categoryReducer";

const rootReducer = combineReducers({
  categories: categoryReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <BlogNavigation></BlogNavigation>
    </Provider>
  )
}
