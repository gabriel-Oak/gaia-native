import AsyncStorage from '@react-native-community/async-storage';

export const setSession = async (token) => {
  try {
    const gaiaSession = {
      token,
      expiresIn: new Date().getTime() + 604800000
    }

    await AsyncStorage.setItem('gaiaSession', JSON.stringify(gaiaSession));
  } catch (e) {
    console.log(e);
  }
}

export const getSession = async () => {
  try {
    const gaiaSession = JSON.parse(await AsyncStorage.getItem('gaiaSession'));

    if (gaiaSession) {
      gaiaSession.expired = new Date().getTime() > (gaiaSession.expiresIn || 0);
            
      return gaiaSession;
    }
    return { token: null, expiresIn: null, expired: true };
  } catch (e) {
    return { token: null, expiresIn: null, expired: true };
  }
}

export const clearSession = async () => await AsyncStorage.removeItem('gaiaSession');