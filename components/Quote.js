import React from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'

const Quote = ({ result }) => {

    if (Object.keys(result).length == 0) return null
    return (
        <ScrollView style={styles.result}>
           
            <Text style={[styles.text,styles.price]}>
                <Text style={styles.span}>{result.PRICE} </Text>
            </Text>
            <Text style={styles.text}>The Down Price : {''}
                <Text style={styles.span}>{result.LOWDAY} </Text>
            </Text>
            <Text style={styles.text}>The Hight Price : {''}   
                <Text style={styles.span}>{result.HIGHDAY} </Text>
            </Text>
            <Text style={styles.text}>Variability last 24 Hours : {' '}
                <Text style={styles.span}>{result.CHANGEPCT24HOUR} %</Text>
            </Text>
            <Text style={styles.text}>Last Update {' '}:  
                <Text style={styles.span}>  {result.LASTUPDATE} </Text>
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    result: {
        backgroundColor:'#5E49E2',
        padding:20
    },
    price:{
        fontSize:38
    },
    text: {
        color:'#FFF',
        fontFamily:'Lato-Regular',
        fontSize:18,
        marginBottom:10
    },
    span: {
        fontFamily:'Lato-Black',
    }
})
export default Quote
