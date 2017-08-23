import {
  Platform
} from 'react-native';

export default config = Platform.select({
  ios: {
    "commonRealmUri": "realm://yourip:9080/commonrealmid/common",
    "realmUri": "http://yourip:9080"
  },
  android: {
    "commonRealmUri": "realm://yourip:9080/commonrealmid/common",
    "realmUri": "http://yourip:9080"
  }
});
