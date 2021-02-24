import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from './resultsDetails'

const ResultsList=({title, results})=>{
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal={true}
            data={results}
            keyExtractor={results=>results.id}
            renderItem={({item})=>{
                return <ResultsDetail results={item} />
            }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:5
    }
})
export default ResultsList;