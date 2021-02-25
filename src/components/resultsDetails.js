import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

const ResultsDetail=({results})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:results.image_url}}/>
            <Text style={styles.imageText}>{results.name}</Text>
            <Text>{results.rating} Stars, {results.review_count} reviews</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginLeft:15
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    imageText:{
        marginTop:5,
        fontWeight:'bold'

    },
    image:{
        width:250,
        height:120,
        marginRight:7,
        borderRadius:4
    }
})
export default ResultsDetail;