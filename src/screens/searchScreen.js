import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
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
        <>
            <SearchBar term={term} 
            onTermChange={searchTerm}
            onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage?<Text>{errorMessage}</Text>:null}
            <ScrollView>
                <ResultsList title="Cost Effective" results={fiterResults('$')}/>
                <ResultsList title="Big Pricer" results={fiterResults('$$')}/>
                <ResultsList title="Big Spender" results={fiterResults('$$$')}/>
                <ResultsList title="Costiliest" results={fiterResults('$$$$')}/>
            </ScrollView>
        </>
    )
}

const styles= StyleSheet.create({
    backGround:{
        backgroundColor:'#fff',
        flex:1
    }
});
export default SearchScreen;