import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import ResultDetail from './ResultDetail'

const ResultsList = ({title, results, navigation}) => {
    if(!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
             showsHorizontalScrollIndicator={false}
             horizontal
             data={results}
             keyExtractor={result => result.id}
             renderItem={({item})=>{return <TouchableOpacity onPress={() => navigation.navigate("ResultsShow", {id: item.id})}>
                 <ResultDetail result={item}></ResultDetail>
                 </TouchableOpacity>
                 }}
            />
        </View>
    )
}

export default withNavigation(ResultsList)

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})
