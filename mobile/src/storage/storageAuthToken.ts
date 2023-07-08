import AsyncStorage from '@react-native-async-storage/async-storage';

import { AUTH_TOKE_STORAGE } from '@storage/storageConfig';

type StorageAuthTokenProps = {
    token: string;
    refresh_token: string;
}

export async function storageAuthTokenSave({ token, refresh_token }: StorageAuthTokenProps) {
    await AsyncStorage.setItem(AUTH_TOKE_STORAGE, JSON.stringify({ token, refresh_token }));
}

export async function storageAuthTokenGet() {
    const response = await AsyncStorage.getItem(AUTH_TOKE_STORAGE);

    const { refresh_token, token }: StorageAuthTokenProps = response ? JSON.parse(response) : {};

    return { refresh_token, token };
}

export async function storageAuthTokenRemove() {
    await AsyncStorage.removeItem(AUTH_TOKE_STORAGE);
}