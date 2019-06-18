import React from 'react';
import { Image, AsyncStorage, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, TextInput, Alert } from 'react-native';
import { MonoText } from '../components/StyledText';
import { LinearGradient } from 'expo';

export default class LoginUser extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);

    this.state={
      loginLocations: null
    };

    this.auth_login = this.auth_login.bind(this);
    this._storeData = this._storeData.bind(this);
    this.checkLoginsExist = this.checkLoginsExist.bind(this);
  }
  componentDidMount(){
    this.setState({
      loginLocations: []
    });
    this.auth_login();
    // this.checkLoginsExist();
    
  }

  async auth_login() {
    // const loginToBeStored= {"username": "egUser1"};
    // const loginList = [];
    // loginList.push(loginToBeStored)
    await AsyncStorage.setItem('loginArray', JSON.stringify([]));
      
    // Alert.alert('You need to...', 'Test This Properly');
    // this._storeData();
    // this.checkLoginsExist();
    // this.setState({
    //   loginLocations: [1,2,3]
    // });
  }
  async checkLoginsExist(){
    
        
  }
  _storeData = async () => {
    try {
      
        await AsyncStorage.setItem('LoginArray', JSON.stringify({'first':'1','second':'2','third':'3'}));
      
      // await AsyncStorage.setItem('1', 'I like to save it.');
      // Alert.alert('Settem...', 'Test This Properly');
      
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <LinearGradient
          start={[0, 1]} end={[1, 0]}
          colors={['rgba(20,30,48,1)', 'rgba(36,59,85,1)', 'rgba(20,30,48,1)']}
          style={{ flex: 1 }}
        >
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          
            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require('../assets/images/robot-dev.png')
                    : require('../assets/images/robot-prod.png')
                }
                style={styles.welcomeImage}
              />
            </View>
            <Button
              title="Go to Home1"
              onPress={() => navigate('Home', { name: 'Home1' })}
            />
            <Text>{this.state && this.state.loginLocations?
              this.state.loginLocations.map(function(item, i){
                return <Text key={i}>{item+" "}</Text>;
              })
              :false}</Text>
            <View style={styles.loginContainer}>
              <Text
                style={styles.title}>
                Login
              </Text>

              <TextInput style={styles.input} placeholder='Username' />
              <TextInput style={styles.input} placeholder='Password' />
              <View style={{ margin: 7 }} />
              <Button
                onPress={this.auth_login}
                title="Login"
              />
              <TouchableOpacity
                onPress={() => navigate('RegisterUser', { name: 'RegisterUser' })}
                style={styles.bottomLinkTouchable}>
                <Text style={styles.bottomLinkText}>
                  Not Registered yet?{" "}
                  <Text style={styles.pressHere}>
                    Press here!
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>

        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View> */}
      </View>
    );
  }




}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },

  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  loginContainer: {
    flex: 1,
    borderColor: '#eb144c',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  input: {
    textAlign: 'center',
    height: 40,
    width: "65%",
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    fontSize: 18,
    color: '#FFFFFF',
    paddingLeft: 10,
    paddingRight: 10,

  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  bottomLinkText: {
    width: '100%',
    color: "rgba(255,255,255,0.8)",
    textAlign: 'right',
  },
  bottomLinkTouchable: {
    width: '65%',
  },
  pressHere: {
    color: "rgba(66, 134, 244, 0.9)",
    paddingLeft: 5,
  },
  title:{
    fontSize: 42,
    marginBottom: 25,
    color: 'white'
  }
});

