import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../Button";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false)

  const googleOAuth = useOAuth({strategy: "oauth_google"})
  async function onGoogleSingIn() {
    try {
      setIsLoading(true)
      const oAuthFlow = await googleOAuth.startOAuthFlow()

      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) { 
          await oAuthFlow.setActive({session: oAuthFlow.createdSessionId})
        }
      } else {
        setIsLoading(false)
      }

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync()

    return () => {
      WebBrowser.coolDownAsync()
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <Button title="Entrar com google" icon="logo-google" onPress={onGoogleSingIn} isLoading={isLoading}/>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
