import React from 'react'
import { StyleSheet } from 'react-native'
import Constatns from 'expo-constants'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        color: '#000'
    },
    input: {
        fontSize: 16
    },
    text: {
        fontSize: 16,
        fontWeight: '600'
    },
    textValues: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonNavigate: {
        backgroundColor: '#34ebc3',
        height: 50,
        width: 90,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonExclude: {
        backgroundColor: '#FF0000',
        height: 50,
        width: 90,
        marginLeft: 30,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        alignContent: 'flex-end',
        marginTop: 8,
    },
    buttonSave: {
        backgroundColor: '#34CB79',
        height: 50,
        width: 90,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    textButton: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    hr: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 10
    },
    historicArea: {
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
})

export default Styles
