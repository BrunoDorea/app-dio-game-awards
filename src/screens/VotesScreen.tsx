import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native'

import { Header } from '../components/Votes/Header'
import { GameCard } from '../components/Votes/GameCard'

import { clientGetGames } from '../api/api'

export function VotesScreen() {

    const [ gameList, setGameList ] = useState([{}])

    useEffect(() => {
        (async () => {
            const response = await clientGetGames()
            setGameList(response)
        })()
    }, [])

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView style={styles.gameArea}>
                {gameList.map(game => GameCard(game))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      color:'#fff',
      backgroundColor: '#191919',
      alignItems: 'center',
      justifyContent: 'center'
    },
    gameArea:{
      flex:1,
      paddingTop:10,
      paddingBottom: 20,
      width:'100%'
    }
  });
  