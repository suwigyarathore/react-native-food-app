import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

const ResultDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

export default ResultDetail

const styles = StyleSheet.create({
    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    },
    container: {
       marginLeft: 15
    }
})
