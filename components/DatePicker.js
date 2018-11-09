import React, { Component, Fragment } from 'react';
import { Button, Platform, DatePickerAndroid, DatePickerIOS } from 'react-native';
import { store } from '../Store/store';
import { actions } from '../Store/actions';


class DatePicker extends Component {
    constructor() {
        super();
        this.state = {
            ...store.getState(),
            showIOSPicker: false
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return { ...store.getState() }
    }


    showModal = () => {
        if (Platform.OS === "android") {
            DatePickerAndroid.open({ mode: 'calendar' })
                .then(({ action, year, month, day }) => {
                    if (action === "dateSetAction") {
                        store.dispatch(actions.setSelectedDate(new Date(year, month, day)))
                    }
                });
        } else {
            this.setState({ showIOSPicker: !this.state.showIOSPicker })
        }
    }

    setDate = date => {
        store.dispatch(actions.setSelectedDate(date))
    }

    render() {
        return (
            <Fragment>
                <Button title={`showing times for ${this.state.selected_date.toDateString()}`} onPress={this.showModal} />
                {this.state.showIOSPicker && <DatePickerIOS date={this.state.selected_date} onDateChange={this.setDate} mode='date' />}
            </Fragment>

        )
    }
}


export default DatePicker;