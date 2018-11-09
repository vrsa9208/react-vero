import React, { Component } from 'react';
import { Text, View, ScrollView, SafeAreaView, Modal, Button, Image, Platform } from 'react-native';
import FilmBrief from './FilmBrief';
import DatePicker from './DatePicker';
import { actions } from '../Store/actions';
import { store } from '../Store/store';
import FilmDetails from './FilmDetails';

class Landing extends Component {

    constructor() {
        super();
        this.state = store.getState();
        store.subscribe(() => this.setState(store.getState()));
    }

    static navigationOptions = {
        header:null,
    }

    chooseTime = (showing, selected_date, selected_film) => {
        this.props.navigation.navigate('PickSeats', {showing, selected_date, selected_film});
        this.hideModal();
    }

    hideModal = () => {
        store.dispatch(actions.hideFilmDetails())
    }

    render() {
        return (
            <SafeAreaView>
                <Modal visible={this.state.showFilmDetails}>
                    <SafeAreaView>
                        <ScrollView>
                            <View style={styles.modalContainer}>
                                <FilmDetails film={this.state.selected_film} showings={null} selectedDate={this.state.selected_date} chooseTime={this.chooseTime}/>
                                <Button onPress={this.hideModal} title="Done" />
                            </View>
                        </ScrollView>

                    </SafeAreaView>

                </Modal>
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <View style={styles.header}>
                            <Image style={styles.logo} source={require('../assets/img/daam.png')} />
                            <Text style={styles.title}>Dinner and Movie</Text>
                        </View>
                        <Text style={styles.instructions}>Pick a movie below and a date to see showtimes</Text>
                        <DatePicker />
                        <View style={styles.filmsContainer}>
                            {this.state.films.map(film => {
                                return <FilmBrief key={film.id} film={film} />
                            })}
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

}


const styles = {
    mainContainer: {
        flex: 1,
        backgroundColor:'#fff'
    },
    header: {
        flexDirection: 'row',
        padding: 8,
    },
    instructions: {
        textAlign: 'center',
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
    filmsContainer: {
        padding: 8,
    },
    modalContainer: {
        marginBottom: 24
    }
}

export default Landing;