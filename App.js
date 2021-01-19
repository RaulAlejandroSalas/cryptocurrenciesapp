
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  ActivityIndicator
} from 'react-native';
import axio from 'axios'
import Form from './components/Form';

import Header from './components/Header'
import axios from 'axios';
import Quote from './components/Quote';

const App = () => {

  const [currency, setCurrency] = useState('')
  const [cryptocurrency, setCryptoCurrency] = useState('')
  const [fetchCryptoCurrenciesApi, setCryptoCurrenciesApi] = useState(false)
  const [response, setResponse] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const quoteCryptoCurrenciesFetchApi = async () => {
      if (fetchCryptoCurrenciesApi) {
        //fetching api to obtain quote
        const API_URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`
        const resp = await axios.get(API_URL)

        setLoading(true)

        setTimeout(() => {
          setResponse(resp.data.DISPLAY[cryptocurrency][currency])
          setCryptoCurrenciesApi(false)
          setLoading(false)
        }, 3000)

      }
    }
    quoteCryptoCurrenciesFetchApi()
  }, [fetchCryptoCurrenciesApi])

  const component = loading ? <ActivityIndicator size="large" color="#5E49E" /> : <Quote result={response} />

  return (
    <>
      <Header />
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}></Image>
      <View style={styles.content}>
        <Form
          currency={currency}
          cryptocurrency={cryptocurrency}
          setCurrency={setCurrency}
          setCryptoCurrency={setCryptoCurrency}
          setCryptoCurrenciesApi={setCryptoCurrenciesApi}

        />
      </View>
      <View style={{ marginTop: 40 }}>
        {component}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },
  content: {
    marginHorizontal: '2.5%'
  }
});

export default App;
