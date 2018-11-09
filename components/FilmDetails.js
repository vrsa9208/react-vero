import React from 'react';
import { Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import showings from '../assets/showings.json';
import ShowingTime from './ShowingTime';
import Title from './Title';


const FilmDetails = (props) => {
    return (
        <View>
            <Image style={styles.detailPoster} source={{ uri: `http://localhost:5000/${props.film.poster_path}` }} resizeMode={'contain'} />
            <ShowingTime style={styles.detailShowingTime} selectedFilm={props.film} selectedDate={props.selectedDate} showings={showings} chooseTime={props.chooseTime}/>
            <View style={styles.detailContainer}>
                <Title>
                    {props.film.title}
                </Title>
                <Text style={styles.detailTitle}></Text>
                <Text style={styles.detailTagline}>{props.film.tagline}</Text>
                <Text style={styles.detailURL}>{props.film.homepage}</Text>
                <Text style={styles.detailOverview}>{props.film.overview}</Text>
                <Text style={styles.detailReleacedate}>Release date : {new Date(props.film.release_date).toDateString()}</Text>
                <Text style={styles.detailRuntime}>Runing time: {props.film.runtime} minutes</Text>
                <View style={styles.detailVotes}>
                    <Text style={styles.detailAverage}>Rating: {props.film.vote_average}/<Text style={styles.detailSmaller}>10</Text></Text>
                    <Text style={styles.detailCount}>{props.film.vote_count} Votes</Text>
                </View>

            </View>
        </View>
    )
}

export default FilmDetails;

const styles = {
    detailPoster: {
        height: 400
    },
    detailContainer: {
        padding: 16,
        flex: 1,
    },
    detailTagline: {
        fontSize: 16,
        marginBottom: 16,
    },
    detailURL: {
        fontSize: 14,
        marginBottom: 16,
    },
    detailRuntime:{
        marginBottom: 16
    },
    detailOverview: {
        marginBottom: 16,
        fontSize:16
    },
    detailReleacedate: {
        marginBottom: 16,
    },
    detailVotes: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailAverage: {
        fontSize: 24,
    },
    detailSmaller: {
        fontSize: 16,
    },

    detailCount: {
        fontSize: 16,
    },
}