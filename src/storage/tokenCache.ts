import * as SecureStore from "expo-secure-store";

async function getToken(key: string) {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error("Erro ao obter token:", error);
    throw error;
  }
}

async function saveToken(key: string, value: string) {
  try {
    return await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error("Erro ao salvar token:", error);
    throw error;
  }
}

async function removeToken(key: string) {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error("Erro ao remover token:", error);
    throw error;
  }
}

export const tokenCache = { getToken, saveToken, removeToken };
