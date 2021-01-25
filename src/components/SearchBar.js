import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search"/>
            <TextInput style={styles.inputStyle} placeholder="search"/>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
