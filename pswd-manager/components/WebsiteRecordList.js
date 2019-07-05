import React from 'react';
import { View, FlatList, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import WebsiteRecord from './WebsiteRecord';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default class WebsiteRecordList extends React.PureComponent {
    // const WebsiteRecordList = ({ itemList }) => (

    // );
    constructor(props) {
        super(props);
        this.itemClick = this.itemClick.bind(this);
        this._renderItem = this._renderItem.bind(this);
        this._keyExtractor = this._keyExtractor.bind(this);
    }

    _renderItem = ({ item }) => (
        <WebsiteRecord
            listType='list'
            key={item.key}
            title={item.title}
            description={item.description}
            image_url={item.image_url}
        />
    );
    _keyExtractor = (item, index) => item.key.toString();
    
    _onPressItem = () => {
        Alert.alert("Yes");
    };

    itemClick() {
        Alert.alert("yes");
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.searchTerm}</Text>
                <FlatList
                    
                    keyExtractor={this._keyExtractor}
                    data={this.props.itemList}
                    renderItem={this._renderItem}
                />
            </View>
        );
    };
}


