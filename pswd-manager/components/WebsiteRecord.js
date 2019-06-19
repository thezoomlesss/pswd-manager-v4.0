import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { SimpleAnimation } from 'react-native-simple-animations';

export default class WebsiteRecord extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false
        }
        this.showMore_click = this.showMore_click.bind(this);
    }
    showMore_click() {
        this.setState(prevState => ({
            showMore: !prevState.showMore
        }));
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topRow}>
                    <Image source={{ uri: this.props.image_url }} style={styles.photo} />
                    <View style={styles.container_text}>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <TouchableOpacity onPress={this.showMore_click}>
                            <Text style={styles.showMoreText}>
                                Click here
                        </Text>
                        </TouchableOpacity>
                        {/* <Text style={styles.description}>
                {description}
            </Text> */}
                    </View>
                </View>
                <View>
                    {(this.state.showMore == true) ? (
                        <SimpleAnimation
                            duration={1000}
                            fade
                            staticType='zoom'>
                            <View style={styles.actionBar}>
                                <View style={styles.buttomActionContainer}>
                                    <TouchableOpacity style={styles.actionButtonLeft}>
                                        <Text style={styles.textButton}>Show Username</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttomActionContainer}>
                                    <TouchableOpacity style={styles.actionButtonRight}>
                                        <Text style={styles.textButton}>Show Password</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttomActionContainer}>
                                    <TouchableOpacity style={styles.actionButtonLeft}>
                                        <Text style={styles.textButton}>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttomActionContainer}>
                                    <TouchableOpacity style={styles.actionButtonRight}>
                                        <Text style={styles.textButton}>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.actionBar}>
                                <View style={styles.buttomActionContainer}>
                                    <TouchableOpacity style={styles.actionButtonLeft}>
                                        <Text style={styles.textButton}>Copy Username</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttomActionContainer}>
                                    <TouchableOpacity style={styles.actionButtonRight}>
                                        <Text style={styles.textButton}>Copy Password</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttomActionContainer}>
                                    <TouchableOpacity style={styles.actionButtonLeft}>
                                        <Text style={styles.textButton}>Copy URL</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttomActionContainer}>
                                    <TouchableOpacity style={styles.actionButtonRight}>
                                        <Text style={styles.textButton}>Nothing</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </SimpleAnimation>) : false}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
    actionButtonLeft: {
        padding: 10,
        marginRight: 5,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: 'rgb(112, 167, 249)',
        elevation: 2,
    },
    buttomActionContainer: {
        width: '25%',
    },
    actionButtonRight: {
        padding: 10,
        marginLeft: 5,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: 'rgb(209, 50, 50)',
        elevation: 2,
    },
    textButton: {
        color: "#FFF",
        textAlign: "center",
    },
    actionBar: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    showMoreText: {
        textAlign: 'right',
    },
    topRow:{
        flexDirection: 'row',
    }
});
