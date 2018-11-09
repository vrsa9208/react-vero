import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import {actions} from '../Store/actions';
import {store} from '../Store/store';

const FilmBrief = (props) => {
    const selectThisFilm = (film) => {
        store.dispatch(actions.setSelectedFilm(film));
        store.dispatch(actions.showFilmDetails());
    }

    return(
        <TouchableHighlight onPress={() => selectThisFilm(props.film)}>
            <View style={styles.filmContainer}>
                <Image style ={styles.filmPoster} source={{uri:`http://localhost:5000/${props.film.poster_path}`}} resizeMode={'contain'}/>
                <View style={styles.filmTexts}>
                    <Text style={styles.filmTitle}>{props.film.title}</Text>
                    <Text style={styles.filmTagline}>{props.film.tagline}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default FilmBrief;

const styles = {
    filmContainer:{
        flexDirection:'row',
        marginBottom:8,
    },
    filmPoster:{
        height:100,
        width:100,
        marginRight:8,
        
    },
    filmTexts:{
        flex:1,
    },
    filmTitle:{
        fontSize:24,
    },
    filmTagline:{
        
    },
}