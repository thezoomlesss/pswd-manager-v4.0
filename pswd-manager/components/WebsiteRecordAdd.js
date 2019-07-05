import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { SimpleAnimation } from 'react-native-simple-animations';
import WebsiteRecord from './WebsiteRecord';

export default class WebsiteRecordAdd extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <WebsiteRecord
                    closeNewWebsite={this.props.closeNewWebsite}
                    listType='add' />
            </View>
        );
    }
}


const styles = StyleSheet.create({

});
