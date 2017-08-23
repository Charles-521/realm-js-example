import React, {
  Component
} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native'
import Realm from 'realm';
import PropTypes from 'prop-types';


import config from './config';
import {
  Organisation,
  User,
  Project,
  LocalUser,
  Template
} from './schemas';

export default class LoginView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: 'id',
      password: 'password'
    };
  }

  componentDidMount() {
    if (Realm.Sync.User.current) {
      Realm.Sync.User.current.logout();
    }

    Realm.Sync.User.login(config.realmUri, this.state.id, this.state.password, (err, loginUser) => {
      if (err) {
        console.log("[login-input]", err);
        return;
      }

      Realm.open({
        sync: {
          user: loginUser,
          url: config.commonRealmUri,
        },
        schema: [User, Organisation]
      }).then(commonRealm => {
        console.log(commonRealm);
        let users = commonRealm.objects('User');
        console.log('[users]: ', users);
        let user = commonRealm.objects('User').filtered('email="' + this.state.id + '"')[0];
        console.log('[user]: ', user);
        if (!user) {
          loginUser.logout();
          const error = new Error('User is not found');
          error.name = 'UserNotFound';
          return;
        }

        loginUser.logout();
      });
    });
  }


  render() {
    return (
      <View><Text>Login View</Text></View>
    );
  }
}
