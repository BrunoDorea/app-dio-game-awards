import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import { Winner } from '../components/Winner/Winner';

import { gameInterface } from '../interfaces/gameInterface'
import { clientGetWinner } from '../api/api';

export function WinnerScreen() {
    const [ game, setGame ] = useState<gameInterface>({
        id: 0,
        name: "__",
        description: "__",
        cover: "__",
        votes: 0,
    })

    useFocusEffect(
        useCallback(() =>{
            (async() => {
                const winner = await clientGetWinner()
                setGame(winner)
            })()
        }, [])
    )

    return(
        <View style={styles.container}>
            <Winner 
            name={game.name}
            cover={game.cover}
            votes={game.votes}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      color:'#fff',
      backgroundColor: '#191919',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      borderWidth:3,
      borderColor:'#fff',
      borderRadius:30
    },
    gameLabel:{
      color:'#fff',
      textAlign:'center',
      fontSize:22
    },
    winnerLabel:{
      backgroundColor:'#0EC244',
      borderRadius:4,
      textAlign:'center',
      color:'#fff',
      fontWeight:'bold',
      fontSize:30,
      paddig:10
    },
    card:{
      borderRadius:10,
      width: 200, 
      height: 300,
    }
  });