import React, { useState,  useEffect } from 'react'
import { StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native'
import yelp from '../api/yelp';

if (Platform.OS === 'android') { 
    if (!ActivityIndicator.defaultProps) ActivityIndicator.defaultProps = {};
    ActivityIndicator.defaultProps.color =  'gray';
  }

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam("id");
    const [result, setResult] = useState(null);

    useEffect(() => {
       getResult(id);
    }, [])

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    return (
        <>
             {!result ? <ActivityIndicator  size="large" style={{flex:1}}/> :  
                        <FlatList data={result.photos} 
                        keyExtractor={(photo) => photo}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        renderItem={({item}) => {
                            return <Image style={styles.image} source={{uri: item}}/>
                        }} />}
        </>
    )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginRight: 10,
        marginTop: 10
    },
})
