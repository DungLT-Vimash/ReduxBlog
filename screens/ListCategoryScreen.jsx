import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import React, { Component } from "react";
import { connect } from "react-redux";

class ListCategoryScreen extends Component {
  goInsertCategoryHandler = () => {
    const { navigation } = this.props;
    navigation.navigate("InsertCategoryScreen");
  };
  render() {
    const { categories } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          keyExtractor={(item, index) => {
            item.categoryId;
          }}
          renderItem={(itemData) => (
            <Text style={styles.item}>{itemData.item.name}</Text>
          )}
        ></FlatList>
        <View style={styles.button}>
          <Button
            title="Insert Category"
            onPress={this.goInsertCategoryHandler}
          ></Button>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListCategoryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  button: {
    margin: 5,
  },
  item: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#cc0",
    margin: 5,
    padding: 5,
  },
});
