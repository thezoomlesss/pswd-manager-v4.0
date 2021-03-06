import React from 'react';
import { Image, AsyncStorage, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, TextInput, Alert } from 'react-native';
import { MonoText } from '../components/StyledText';
import { LinearGradient } from 'expo';
import WebsiteRecordList from '../components/WebsiteRecordList'
import WebsiteRecordAdd from '../components/WebsiteRecordAdd'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      addNew: null,
      searchValue: null,
      displayFlatline: true,
    }
    this.getData = this.getData.bind(this);
    this.newWebsiteClick = this.newWebsiteClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.newWebsiteClose = this.newWebsiteClose.bind(this);
    this.callFlatlist = this.callFlatlist.bind(this);
  }
  componentDidMount() {
    const username = this.props.navigation.getParam('username', 'no-user');
    this.setState({
      username: username,
      addNew: 'false',
      searchValue: '',
    });
  }

  handleChange(e, name) {
    const inputedValue = e.nativeEvent.text;
    this.setState({
      [name]: inputedValue
    });
    if (name == "searchValue") {
      this.callFlatlist(inputedValue);
    }
  }

  newWebsiteClick() {
    this.setState({
      addNew: 'true'
    });
  }
  newWebsiteClose() {
    this.setState({
      addNew: 'false'
    });
  }
  callFlatlist(searchValue) {

    let data = this.getData();
    let matches = false;
    for (var i = 0; i < data.length; i++) {
      // console.log("Checking " + data[i].title + " with " + this.state.searchValue)
      if (data[i].title.toLowerCase().includes(searchValue.toLowerCase())) {
        matches = true;
        break;
      }
    }

    if (matches == true || searchValue == '') {
      this.setState({
        displayFlatline: true
      })
    } else {
      this.setState({
        displayFlatline: false
      })
    }

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
        key: 11,
        title: 'Albert Einstein',
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
                <TouchableOpacity onPress={this.newWebsiteClick} style={styles.actionButtonLeft}>
                  <Text style={styles.textButtonLeft}>New Website</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttomActionContainer}>
                <TouchableOpacity style={styles.actionButtonRight}>
                  <Text style={styles.textButtonRight}>Test</Text>
                </TouchableOpacity>
              </View>

            </View>
            {this.state.addNew == 'true' ?
              <WebsiteRecordAdd
                closeNewWebsite={this.newWebsiteClose} />
              : false}
            <View style={styles.searchContainer}>
              <TextInput
                onChange={(event) => this.handleChange(event, "searchValue")}
                style={styles.searchInput}
                placeholder="Search"
                value={this.state.searchValue}
              />
            </View>
            <Text>{this.state.displayFlatline + " " +  this.state.searchValue}</Text>
            {this.state.displayFlatline == true ?
              <WebsiteRecordList
                searchTerm={this.state.searchValue}
                itemList={this.getData()}>

              </WebsiteRecordList> :
              <View style={styles.noMatchesContainer}>
                <Text style={styles.noMatchText}>No match</Text>
              </View>
            }
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
  noMatchesContainer: {
    flex: 1,
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    borderColor: 'rgba(44, 60, 89, 1)',
    backgroundColor: 'rgba(80, 98, 130, 0.8)',
    elevation: 2,
  },
  noMatchText:{
    textAlign: 'center',
    color: '#FFF'
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
    borderRadius: 10,
    backgroundColor: 'rgb(112, 167, 249)',
    elevation: 2,
  },
  buttomActionContainer: {
    width: '50%',
  },
  actionButtonRight: {
    padding: 10,
    marginLeft: 5,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'rgb(209, 50, 50)',
    backgroundColor: 'rgba(97, 123, 168, 1)',
    elevation: 2,
  },
  textButtonRight: {
    color: 'rgb(209, 50, 50)',
    textAlign: "center",
    fontWeight: 'bold'
  },
  textButtonLeft: {
    color: '#FFF',
    textAlign: "center",
  },
  searchInput: {
    textAlign: 'center',
    height: 40,
    width: "100%",
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
  searchContainer: {
    marginLeft: 16,
    marginRight: 16,
  },
});