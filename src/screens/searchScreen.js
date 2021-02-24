import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/searchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/resultsList';
const SearchScreen=()=>{
    const [term,searchTerm]=useState('');
    const [searchApi, results, errorMessage]=useResults();
    const fiterResults=(price)=>{
        return results.filter(result=>{
            return result.price===price;
        });
    };
    return(
        <View style={styles.backGround}>
            <SearchBar term={term} 
            onTermChange={searchTerm}
            onTermSubmit={searchApi}
            />
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <Text>We have found {results.length} restaraunts</Text>
            <ResultsList title="Cost Effective" results={fiterResults('$')}/>
            <ResultsList title="Big Pricer" results={fiterResults('$$')}/>
            <ResultsList title="Big Spender" results={fiterResults('$$$')}/>
            <ResultsList title="Costiliest" results={fiterResults('$$$$')}/>
        </View>
    )
}

const styles= StyleSheet.create({
    backGround:{
        backgroundColor:'#fff'
    }
});
export default SearchScreen;