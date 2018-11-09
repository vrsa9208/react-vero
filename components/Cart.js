import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

const sumItems = (items) => {
    let subtotal = 0.0;
    items.forEach(item => {
        subtotal += item.price;
    });
    return subtotal;
} 

const Cart = (props) => {
    return (
        <Fragment>
            <Text style={styles.cartTitle}>Your cart</Text>
            <View style={styles.cartContainer}>
                {props.cart.map(item => {
                    return (
                        <View style={styles.cartItem} key={item._id}>
                            <Text>{`Table ${item.table_number}, Seat ${item.seat_number}`}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    );
                })}
                <View style={styles.cartSummary}>
                    <Text style={styles.cartSummaryTxt}>Subtotal</Text>
                    <Text style={styles.cartSummaryQty}>{sumItems(props.cart).toFixed(2)}</Text>
                </View>
                <View style={styles.cartSummary}>
                    <Text style={styles.cartSummaryTxt}>Tax</Text>
                    <Text style={styles.cartSummaryQty}>{(sumItems(props.cart) * 0.16).toFixed(2)}</Text>
                </View>
                <View style={styles.cartSummary}>
                    <Text style={styles.cartSummaryTxt}>Total</Text>
                    <Text style={styles.cartSummaryQty}>{(sumItems(props.cart) * 1.16).toFixed(2)}</Text>
                </View>
            </View>
        </Fragment>

    )
}

export default Cart;

const styles = {
    cartContainer: {
        padding: 8,
        shadowColor: '#909497',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 8,
    },
    cartTitle:{
        fontSize:16,
        marginTop:16,
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    cartSummary: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 8,
    },
    cartSummaryQty: {
        textAlign: 'right',
        flex: 1
    },
    cartSummaryTxt: {
        marginLeft: 150,
        flex: 3,
    },
}