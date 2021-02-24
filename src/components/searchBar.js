import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
const SearchBar=({term,onTermChange,onTermSubmit})=>{
    return(
        <View style={styles.backGroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput style={styles.inputStyle} placeholder="Search"
            value={term}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    backGroundStyle:{
        marginTop:15,
        backgroundColor:'#F0EEEE',
        height:48,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row'
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        marginHorizontal:15,
        alignSelf:'center'
    }
});
export default SearchBar;