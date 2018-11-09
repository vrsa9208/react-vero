import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Landing from './components/Landing';
import { store } from './Store/store';
import { actions } from './Store/actions';
import Checkout from './components/Checkout';
import PickSeats from './components/PickSeats';
import { createStackNavigator } from 'react-navigation';
import Ticket from './components/Ticket';

const routes = {
  Landing: {
    screen: Landing,
  },
  PickSeats: {
    screen: PickSeats,
  },
  Checkout:{
    screen: Checkout,
  },
  Ticket:{
    screen: Ticket,
  }
}

const stackNavConfig = {
  initialRouteName: 'Landing',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(255, 255, 255)', // Or whatever color you like
    },
    headerTintColor: 'rgb(0, 0, 0)', // For the back/forward buttons
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}

const MyStackNavigator = createStackNavigator(routes, stackNavConfig);


export default class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  componentDidMount() {
    store.dispatch(actions.fetchFilms());
  }

  render() {
    console.log(this.state);
    return (

      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor='#000000' translucent={true} />
        <MyStackNavigator />
        {/* <Landing
          films={this.state.films}
          showFilmDetails={this.state.showFilmDetails}
          selectedFilm={this.state.selected_film}
          selectedDate={this.state.selected_date}
        /> */}
        {/* <Checkout /> */}
        {/* <PickSeats/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
