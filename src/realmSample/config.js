import {
  Platform
} from 'react-native';

export default config = Platform.select({
  ios: {
    "commonRealmUri": "realm://52.187.39.22:9080/13cd2a1671cddf45c9db98d43f20523b/common",
    "realmUri": "http://52.187.39.22:9080"
  },
  android: {
    "commonRealmUri": "realm://52.187.39.22:9080/13cd2a1671cddf45c9db98d43f20523b/common",
    "realmUri": "http://52.187.39.22:9080"
  }
});
