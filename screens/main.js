import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Main = () => {
    return (
        <>
            <View style={styles.results}>
            </View>
            <View style={styles.calculation}>
            </View>
            <View style={styles.buttons}>
                <View style={styles.numbers}>
                </View>
                <View style={styles.operators}></View>
            </View>
        </>
    )
}

export default Main

const styles = StyleSheet.create({
    results:{
        flex:2,
        backgroundColor:'#800000'
    },
    calculation:{
        flex:1,
        backgroundColor:'#ffff00',
    },
    buttons:{
        flex:7,
        backgroundColor:'#0000ff',
        flexDirection:'row'
    },
    numbers:{
        flex:3,
        backgroundColor:'#4b0082',
    },
    operators:{
        flex:1,
        backgroundColor:'#800080'
    }


})
