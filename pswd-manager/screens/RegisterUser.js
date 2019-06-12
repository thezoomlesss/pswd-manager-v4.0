import React from 'react';
import { Image, AsyncStorage, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, TextInput, Alert } from 'react-native';
import { MonoText } from '../components/StyledText';
import { LinearGradient } from 'expo';

export default class RegisterUser extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);

        this.auth_login = this.auth_login.bind(this);
        this._retrieveData = this._retrieveData.bind(this);

    }
    auth_login() {
        // Alert.alert('You need to...', 'Test This Properly');
        this._retrieveData();
    }
    _retrieveData = async () => {
        try {

            const value = await AsyncStorage.getItem('1');
            if (value !== null) {
                // We have data!!
                Alert.alert('Gottem...', value);

                // console.log(value);
            } else {
                Alert.alert('Gottem...', 'No Value');
            }
        } catch (error) {
            // Error retrieving data
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

                        <View style={styles.loginContainer}>
                            <Text
                                style={styles.title}>
                                Register
              </Text>

                            <TextInput style={styles.input} placeholder='Username' />
                            <TextInput style={styles.input} placeholder='Password' />
                            <View style={{ margin: 7 }} />
                            <Button
                                onPress={this.auth_login}
                                title="Register"
                            />
                            <TouchableOpacity
                                onPress={() => navigate('LoginUser', { name: 'Login Page' })}
                                style={styles.bottomLinkTouchable}>
                                <Text style={styles.bottomLinkText}>
                                    Already Registered?{" "}
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
    title: {
        fontSize: 42,
        marginBottom: 25,
        color: 'white'
    }
});

