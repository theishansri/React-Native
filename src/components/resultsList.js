import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './resultsDetails'
import {withNavigation} from 'react-navigation'
const ResultsList=({title, results, navigation})=>{
    if(!results.length){
        return null;
    }
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={results}
            keyExtractor={results=>results.id}
            renderItem={({item})=>{
                return (
                <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow',{id:item.id})}>
                    <ResultsDetail results={item} />
                </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:5,
        marginLeft:15
    }
})
export default withNavigation(ResultsList);