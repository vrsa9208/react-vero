import React from 'react';
import { Text, View } from 'react-native';


const ShowingTime = (props) => {
    return (
        <View >
            <Text style={styles.showingDate}>Showing times for {props.selectedDate.toDateString()}</Text>
            <View style={styles.showingSchedule}>
                {props.showings.map(showing => {
                    const date = new Date(showing.showing_time);
                    return (<Text style={styles.showingHour} key={showing.id} onPress={() => props.chooseTime(showing, props.selectedDate, props.selectedFilm)}>
                        {`${date.getHours()}:${date.getMinutes()}`}
                    </Text>)
                })}
            </View>

        </View>
    )
}

export default ShowingTime;

const styles = {
    showingDate: {
        textAlign: 'center',
        margin:8,
        fontWeight: 'bold',
        fontSize:16,
    },
    showingSchedule:{
        flexDirection:'row',
        justifyContent:'center',
    },
    showingHour: {
        margin:16,
        fontSize:16
    },
}