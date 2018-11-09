import React from 'react';
import {Text, Platform} from 'react-native';


const Title = (props) => {
    return(
        <Text style={styles.title}>{props.children}</Text>
    )
} 


export default Title;




const styles = {
    title: {
        fontFamily: Platform.OS === 'ios' ? 'Futura': 'Roboto',
        fontSize:32,
    }
}