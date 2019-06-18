import React from 'react';
import { Image, AsyncStorage, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, TextInput, Alert } from 'react-native';
import { MonoText } from '../components/StyledText';
import { LinearGradient } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      username: null
    }
  }
  componentDidMount() {
    const username = this.props.navigation.getParam('username', 'no-user');
    this.setState({
      username: username
    });
    Alert.alert("username", username)
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
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>Hi {this.state.username}!</Text>
          </View>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>


          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    borderColor: '#eb144c',
    borderWidth: 1,

  },

  contentContainer: {
    paddingTop: 30,
  },
  topBar:{
    marginTop: 20,
    paddingLeft: 10
  },
  topBarText:{
    color : "#FFF",
    fontSize: 22,
  }
});