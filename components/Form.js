import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'
const Form = ({ currency, cryptocurrency, setCurrency, setCryptoCurrency, setCryptoCurrenciesApi }) => {


    const [cryptocurrencies, setCryptoCurrencies] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const API_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const response = await axios.get(API_URL)
            console.log(response.data.Data)
            setCryptoCurrencies(response.data.Data)
        }
        fetchApi()
    }, [])

    const quote = () => {
        console.log('Click Quote')
        if (currency.trim() === '' || cryptocurrency.trim() === '') {
            showAlert()
            return
        } else {
            setCryptoCurrenciesApi(true)
        }
    }

    const showAlert = () => {
        Alert.alert(
            'Error..',
            'The Fields Currency and Cryptocurrency required',
            [{
                text: 'OK'
            }]
        )
    }
    return (
        <View>
            <Text style={styles.label}> Currency </Text>
            <Picker
                selectedValue={currency}
                itemStyle={{ height: 120 }}
                onValueChange={currency => setCurrency(currency)}
            >
                <Picker.Item label="- Select -" value="" />
                <Picker.Item label="Dolar of USA" value="USD" />
                <Picker.Item label="Peso Mexican" value="MXN" />
                <Picker.Item label="Euro" value="EUR" />
                <Picker.Item label="Libra Esterlina" value="GBP" />
            </Picker>
            <Text style={styles.label}> Cryptocurrency </Text>

            <Picker
                itemStyle={{ height: 120 }}
                selectedValue={cryptocurrency}
                onValueChange={cryptocurrency => setCryptoCurrency(cryptocurrency)}
            >
                <Picker.Item label="- Select -" value="" />
                {cryptocurrencies.map(crypto =>
                (
                    <Picker.Item key={crypto.CoinInfo.Id} label={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name} />
                )
                )}
            </Picker>
            <TouchableHighlight
                onPress={() => quote()}
                style={styles.btnCotizar}
            >
                <Text style={styles.btnCotizarText}>Quote</Text>
            </TouchableHighlight>

        </View>
    )
}


const styles = StyleSheet.create({
    label: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20

    },
    btnCotizar: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 10
    },
    btnCotizarText: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        textAlign: 'center'


    }
})


export default Form
