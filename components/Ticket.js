import React from 'react';
import { View, Text, Image, SafeAreaView, Platform } from 'react-native';
import QRCode from 'react-native-qrcode';

const Ticket = (props) => {
    const ticket_number = Math.floor(Math.random() * 50000) + 1000000;
    const { selected_film, selected_date, showing } = props.navigation.state.params;
    const date = new Date(selected_date);
    const showingTime = new Date(showing.showing_time);

    return (
        <SafeAreaView>
            <View style={styles.ticketContainer}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={require('../assets/img/daam.png')} />
                    <Text style={styles.title}>Dinner and Movie</Text>
                </View>
                <View>
                    <Text>
                        We're looking forward to seeing you soon. Please show this to the host when you arrive. This is your ticket.
                    </Text>
                </View>
                <View style={styles.ticketInfo}>
                    <Image style={styles.ticketPoster} source={{ uri: `http://localhost:5000/${selected_film.poster_path}`}} resizeMode={'contain'} />
                    <View style={styles.ticketInfoText}>
                        <Text style={styles.ticketInfoTitle}>{selected_film.title}</Text>
                        <Text>{date.toDateString()} {showingTime.getHours()}:{showingTime.getMinutes()}</Text>
                        <Text>Table 1 - Seat 5</Text>
                    </View>
                </View>
                <View style={styles.ticketQR}>
                    <QRCode
                        value={ticket_number}
                        size={250}

                    />
                    <Text>Ticket number: {ticket_number}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Ticket;

const styles = {
    ticketContainer: {
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        padding: 8,
    },
    logo: {
        height: 40,
        width: 40,
        marginRight: 8,
    },
    title: {
        fontSize: 32,
        fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
    },
    ticketInfo: {
        flexDirection: 'row',
        marginVertical: 16,
        borderBottomWidth:1,
        borderColor:'#A6ACAF',
        paddingBottom:16
    },
    ticketInfoText: {
        flexDirection: 'column',
        flex:1,
    },
    ticketInfoTitle: {
        fontSize: 24,
        fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
        marginBottom:16,
    },
    ticketPoster: {
        height: 150,
        width: 150,

    },
    ticketQR: {
        alignItems: 'center',
    }


}