import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, TextInput } from 'react-native';
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
            this.props.listType == 'list' ?
                <View style={styles.container}>
                    <Text>{this.props.searchTerm}</Text>
                    <View style={styles.topRow}>
                        <Image source={{ uri: this.props.image_url }} style={styles.photo} />
                        <View style={styles.container_text}>
                            <Text style={styles.title}>
                                {this.props.title}
                            </Text>
                            <TouchableOpacity onPress={this.showMore_click}>
                                {!this.state.showMore ? <Text style={styles.showMoreText}>Show More</Text> : <Text style={styles.showMoreText}>Show Less</Text>}
                            </TouchableOpacity>
                            {/* <Text style={styles.description}>
                {description}
            </Text> */}
                        </View>
                    </View>
                    <View>
                        {(this.state.showMore == true) ? (
                            <SimpleAnimation
                                duration={500}
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
                :
                <View>
                    <View style={styles.container2}>
                        <View>
                            <Image source={{ uri: this.props.image_url }} style={styles.photo} />
                        </View>
                        <View style={styles.newWebsiteInputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Webiste Name"
                            // onChangeText={(text) => this.setState({ text })}
                            // value={this.state.text}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="email"
                            // onChangeText={(text) => this.setState({ text })}
                            // value={this.state.text}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="password"
                            // onChangeText={(text) => this.setState({ text })}
                            // value={this.state.text}
                            />
                        </View>
                    </View>
                    <View style={styles.actionBar}>
                        <View style={styles.buttomActionContainer}>
                            <TouchableOpacity onPress={this.newWebsiteClick} style={styles.actionButtonLeft}>
                                <Text style={styles.textButton}>New Website</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttomActionContainer}>
                            <TouchableOpacity style={styles.actionButtonRight}>
                                <Text style={styles.textButton}>Test</Text>
                            </TouchableOpacity>
                        </View>

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
        borderColor: 'rgba(44, 60, 89, 1)',
        backgroundColor: 'rgba(80, 98, 130, 0.8)',
        elevation: 2,
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
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
    title: {
        fontSize: 16,
        color: '#FFF',
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
        backgroundColor: "#FFF",
        borderRadius: 25,
        alignSelf: 'stretch'
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
        // borderWidth: 1,
        // borderColor: 'red',
        textAlign: 'right',
        color: '#FFF'
    },
    topRow: {
        flexDirection: 'row',
    },
    input: {
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
    newWebsiteInputContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
    },
    textButton: {
        color: "#FFF",
        textAlign: "center",
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
    buttomActionContainer: {
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
});
