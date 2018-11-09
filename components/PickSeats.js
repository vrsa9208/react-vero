import React from 'react';
import { View, Text, Button, ScrollView, SafeAreaView } from 'react-native';
import Title from './Title';
import tables from '../assets/tables.json';


const PickSeats = (props) => {
    console.log("props", props);
    const {selected_film, selected_date, showing} = props.navigation.state.params;
    const date = new Date(selected_date);
    const showingTime = new Date(showing.showing_time);

    const goToCheckout = () => {
        props.navigation.navigate('Checkout', {selected_film, selected_date, showing});
    }
    console.log("showing", showing);
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.pickSeatsContainer}>
                <Text style={styles.pickSeatsInstructions}>Choose your seats for</Text>
                <Title>{selected_film.title}</Title>
                <Text style={styles.pickSeatsInstructions}>On</Text>
                <Text style={styles.pickSeatsInstructions}>{date.toDateString()}</Text>
                <Text style={styles.pickSeatsInstructions}>at {showingTime.getHours()}:{showingTime.getMinutes()}</Text>
            </View>
            <ScrollView>
                {tables.map(table => {
                    const statusStyle = table.status === "taken" && styles.tableInactive; 
                    return (
                        <View style={[styles.pickSeatsTable, statusStyle]} key={table.id}>
                            <Text style={styles.pickSeatsTableTitle}>{table.table_number}</Text>
                            <View style={styles.pickSeatsSeats}>
                                {table.seats.map(seat => <Text style={styles.pickSeatsSeat} key={seat.seat_number}>Seat {seat.seat_number}</Text>)}
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
            <Button title='Check out' onPress={goToCheckout}/>
        </SafeAreaView>
    )
}

export default PickSeats;

const styles = {
    pickSeatsContainer: {
        padding: 16,
        alignItems: 'center',
    },
    pickSeatsInstructions: {},
    pickSeatsTable: {
        margin: 8,
        padding: 16,
        shadowColor: '#909497',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        backgroundColor: '#FFFFFF'
    },
    pickSeatsTableTitle: {
        fontSize: 24,
    },
    pickSeatsSeats: {
        flexDirection: 'row'
    },
    pickSeatsSeat: {
        fontSize: 16,
        margin: 8,
    },

    tableInactive: {
        backgroundColor: '#F2F3F4',
    }
}