import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

export default function SearchScreen() {
    const [term, setTerm] = useState('')
    return (
        <View>
            <SearchBar 
            term={term} 
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => console.log('Submitted')}/>
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
