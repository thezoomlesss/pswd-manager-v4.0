import React from 'react';
import { Image, AsyncStorage, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, TextInput, Alert } from 'react-native';
import { MonoText } from '../components/StyledText';
import { LinearGradient } from 'expo';
import WebsiteRecordList  from '../components/WebsiteRecordList'
// import { WebsiteRecord } from '../components/WebsiteRecord'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      username: null
    }
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    const username = this.props.navigation.getParam('username', 'no-user');
    this.setState({
      username: username
    });
  }
  getData() {
    return [
      {
        key: 1, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 2,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 3, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 4,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 5, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 6,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 7, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 8,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 9, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 10,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
      {
        key: 11, title: 'Albert Einstein',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
      },
      {
        key: 12,
        title: 'Isaac newton',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
      },
    ]
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
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>Hi {this.state.username}!</Text>
          </View>

          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.actionBar}>
              <View style={styles.buttomActionContainer}>
                <TouchableOpacity style={styles.actionButtonLeft}>
                  <Text style={styles.textButton}>New Website</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttomActionContainer}>
                <TouchableOpacity style={styles.actionButtonRight}>
                  <Text style={styles.textButton}>Test</Text>
                </TouchableOpacity>
              </View>

            </View>
            <WebsiteRecordList
              itemList={this.getData()}>

            </WebsiteRecordList>
          </ScrollView>
          {/* <View style={styles.container}>
              
            </View> */}
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
    paddingBottom: 30,

  },
  topBar: {
    marginTop: 25,
    paddingLeft: 10
  },
  topBarText: {
    color: "#FFF",
    fontSize: 26,
  },
  actionBar: {
    width: '100%',
    marginBottom: 25,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  actionButtonLeft: {
    padding: 10,
    marginLeft: 16,
    marginRight: 5,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: 'rgb(112, 167, 249)',
    elevation: 2,
  },
  buttomActionContainer:{
    width: '50%',
  },
  actionButtonRight: {
    padding: 10,
    marginLeft: 5,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: 'rgb(209, 50, 50)',
    elevation: 2,
  },
  textButton :{
    color: "#FFF",
    textAlign: "center",
  }
});