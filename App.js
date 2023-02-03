import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
} from "react-native";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./img/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./img/fonts/Roboto/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };
  if (!isReady) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            value={name}
            onChangeText={nameHandler}
            placeholder="Username"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
          <Button title={"Login"} style={styles.input} onPress={onLogin} />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    fontFamily: "Roboto-Regular",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
