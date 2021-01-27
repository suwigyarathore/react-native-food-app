import React, { useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';

if (Platform.OS === 'android') { 
    if (!ActivityIndicator.defaultProps) ActivityIndicator.defaultProps = {};
    ActivityIndicator.defaultProps.color =  'gray';
  }

export default function SearchScreen() {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage, loading] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price)
    }

    return (
            <View style={styles.container}>
                <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}/>
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                {loading ? <ActivityIndicator  size="large" style={{flex:1}}/> :  <ScrollView> 
                    <ResultsList title="Cost Effective" results={filterResultsByPrice("$")}/>
                    <ResultsList title="Bit Pricer" results={filterResultsByPrice("$$")}/>
                    <ResultsList title="Big Spender" results={filterResultsByPrice("$$$")}/>
                </ScrollView>}
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})
