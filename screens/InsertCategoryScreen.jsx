import { Text, StyleSheet, View, TextInput, Alert } from "react-native";
import React, { Component } from "react";
import Card from "../components/ui/Card";
import { connect } from "react-redux";

class InsertCategoryScreen extends Component {
  state = {
    categoryId: "",
    name: "",
  };
  inputChangedHandler = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };
  saveCategoryHandler = () => {
    const { insertCategory } = this.props;
    const { categoryId, name } = this.state;
    insertCategory(categoryId, name);
    // Alert.alert(
    //   "Information",
    //   "New category has been inserted",
    //   JSON.stringify(this.state),
    //   [{ text: "Ok" }]
    // );
    navigation.navigate("ListCategoryScreen");
  };
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Text>Category ID</Text>
          <TextInput
            style={styles.input}
            value={this.state.categoryId}
            onChangeText={this.inputChangedHandler.bind(this, "categoryId")}
          ></TextInput>
          <Text>Name</Text>
          <TextInput
            style={styles.input}
            value={this.state.categoryId}
            onChangeText={this.inputChangedHandler.bind(this, "name")}
          ></TextInput>
          <View style={styles.button}>
            <Button title="Save" onPress={this.saveCategoryHandler}></Button>
          </View>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsertCategoryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
});
