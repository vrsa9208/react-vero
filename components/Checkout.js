import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Button, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import Cart from './Cart';
import cart from '../assets/cart.json';
import Title from './Title';

class Checkout extends React.Component {
    purchase = () => {
        this.goToTicket();
    }

    goToTicket = () => {
        const {selected_film, selected_date, showing} = this.props.navigation.state.params;
        this.props.navigation.navigate('Ticket', {selected_film, selected_date, showing});
    }

    render() {
        return (
            <SafeAreaView>
                <KeyboardAvoidingView behavior="position" enabled>
                    <ScrollView>
                        <View style={styles.checkContainer}>
                            <Title>
                                Check out
                            </Title>
                            <View>
                            </View>
                            <Cart cart={cart.seats}/>
                            <View style={styles.checkInputs}>
                                <Text style={styles.checkLabel}>First Name</Text>
                                <TextInput style={styles.checkInputBox}/>
                            </View>
                            <View style={styles.checkInputs}>
                                <Text style={styles.checkLabel}>Last Name</Text>
                                <TextInput style={styles.checkInputBox}/>
                            </View>
                            <View style={styles.checkInputs}>
                                <Text style={styles.checkLabel}>email</Text>
                                <TextInput style={styles.checkInputBox}keyboardType='email-address' />
                            </View>
                            <View style={styles.checkInputs}>
                                <Text style={styles.checkLabel}>Credit Card</Text>
                                <TextInput style={styles.checkInputBox}keyboardType='numeric' />
                            </View>
                            <View style={styles.checkInputs}>
                                <Text style={styles.checkLabel}>Phone number</Text>
                                <TextInput style={styles.checkInputBox}keyboardType='phone-pad' />
                            </View>
                            <View>
                                <Button title="Purchase" onPress={this.purchase} />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}


export default Checkout;

const styles={
    checkContainer:{
        padding:16,
    },
    checkTitle:{
        fontSize:32,
    },
    checkInputs:{
        marginBottom:16,
    },
    checkLabel:{
        fontSize:16,
    },
    checkInputBox:{
        borderRadius:5,
        borderColor:'#D5DBDB',
        borderWidth:1,
        borderStyle:'solid',
        marginTop:4,
        height:32,
    },
}