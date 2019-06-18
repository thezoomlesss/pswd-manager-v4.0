import React from 'react';
import { Image, AsyncStorage, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo';

export default class RegisterUser extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            pswd: null,
        };
        this.auth_register = this.auth_register.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this._storeData = this._storeData.bind(this);
    }
    componentDidMount() {
        this.setState({
            username: '',
            pswd: '',
        });
    }
    
    auth_register() {
        this._storeData();
    }
    async _storeData() {
        /* 
            This function will get the array of total usernames
            Add a new username to the array
            Store the updated array 
            Then store also the username and password combination 
            in its designated place
        */

        try {
            const loginArray = await AsyncStorage.getItem('loginArray');
            const parsedLoginArray = JSON.parse(loginArray);
            if(!parsedLoginArray){
                parsedLoginArray = [];
            }
            const newRegisteredLogin = {"username" : this.state.username};
            parsedLoginArray.push(newRegisteredLogin);
            await AsyncStorage.setItem('loginArray', JSON.stringify(parsedLoginArray));
            await AsyncStorage.setItem(this.state.username, this.state.pswd);
        } catch (error) {
            console.log(error);
        }
    }

    handleChange(e, name) {
        const inputedValue = e.nativeEvent.text;
        this.setState({
            [name]: inputedValue
        });
    }

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

                            <TextInput style={styles.input} id="1" placeholder='Username' name="username" value={this.state.username} onChange={(event) => this.handleChange(event, "username")} />
                            <TextInput style={styles.input} id="2" placeholder='Password' name="pswd" value={this.state.pswd} onChange={(event) => this.handleChange(event, "pswd")} />
                            <View style={{ margin: 7 }} />
                            <Button
                                onPress={this.auth_register}
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

