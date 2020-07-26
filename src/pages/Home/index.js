import React, { useState, useEffect } from 'react'
import { firebaseDatabase } from '../../utils/firebase'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { View, Text, TextInput, Alert, FlatList } from 'react-native'

import Styles from './styles'

const Home = () => {

    const [name, setName] = useState('')
    const [value, setValue] = useState(0)
    const [counts, setCounts] = useState([])
    const [data, setData] = useState([])
    const [key, setKey] = useState([])

    const navigation = useNavigation()

    /*function handleToGraphics() {
        navigation.navigate('Graphics')
    }*/

    async function save() {

        if(name != '' && (value != 0 || value )) {
            const body = {
                name: name,
                value: value
            }
            await firebaseDatabase.push(body)

            Alert.alert('Enviado com sucesso')
            await query()
        } else {
            Alert.alert('Insira os dados corretamente')
        }
    }

    useEffect(() => {
        query()
    }, [])

    function query() {
        var childData = []
        var childKey = []

        firebaseDatabase.once('value', function (snapshot) {
            snapshot.forEach(function(childSnapshot) {
                childKey.push(childSnapshot.key.toString())
                childData.push(childSnapshot.val())
            })
            setCounts(childData)

            if(data.length != 0 || key.length != 0){
                data.splice(0, counts.length + 1)
                key.splice(0, counts.length + 1)
            }

            key.push(childKey)

            for (let i = 0; i < counts.length; i++) {
                data.push(Number(counts[i].value))
            }
        })
    }

    async function exclude(index){
        firebaseDatabase.child(key[0][index]).remove()
        await query()
        Alert.alert('Registro Excluído')
    }

    return (
        <>
            <View styles={Styles.container}>
                <Text style={Styles.title}>Conta:</Text>
                <TextInput
                    placeholder="Insira a conta"
                    style={Styles.input}
                    value={name}
                    onChangeText={ (name) => {setName(name)} }
                >
                </TextInput>

                <Text style={Styles.title}>Valor:</Text>
                <TextInput
                    placeholder="Insira o valor"
                    keyboardType="number-pad"
                    style={Styles.input}
                    value={value.string}
                    onChangeText={ (value) => {setValue(value)} }
                >
                </TextInput>

                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                >
                <RectButton
                        style={Styles.buttonNavigate}
                        onPress={() => {navigation.navigate('Graphics', {
                            value: data
                        })}
                    }
                    >
                        <Text style={Styles.textButton}>Gráfico</Text>
                    </RectButton>
                    <RectButton
                        style={Styles.buttonSave}
                        onPress={save}
                    >
                        <Text style={Styles.textButton}>Salvar</Text>
                    </RectButton>
                </View>
            </View>

            <View style={[Styles.hr, {borderBottomWidth: 2}]}></View>

            <View style={Styles.container}>
                <FlatList
                    data={counts}
                    renderItem={
                    ({ item, index }) =>
                        <View style={[Styles.historicArea, Styles.hr]}>
                            <Text style={Styles.text}>Nome: </Text>
                            <Text style={Styles.textValues}>{item.name}</Text>
                            <Text style={Styles.textValues}>|</Text>
                            <Text style={Styles.text}>Valor: </Text>
                            <Text style={Styles.textValues}>{item.value}</Text>
                            <RectButton
                                style={Styles.buttonExclude}
                                onPress={() => exclude(index)}
                            >
                                <Text style={Styles.textButton}>Excluir</Text>
                            </RectButton>
                        </View>
                    }
                />
            </View>
        </>
    )
}

export default Home
