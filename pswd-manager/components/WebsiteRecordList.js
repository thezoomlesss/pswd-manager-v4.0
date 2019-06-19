import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import WebsiteRecord  from './WebsiteRecord';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const WebsiteRecordList = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
            data={itemList}
            renderItem={({ item }) => <WebsiteRecord
                title={item.title}
                description={item.description}
                image_url={item.image_url}
            />}
        />

    </View>
);

export default WebsiteRecordList;
