import React from "react"
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from "react-native-gesture-handler"

const Listview = () => {

    const uni = [
        { name: "Buet", key: '1' },
        { name: "Xuet", key: '2' },
        { name: "Auet", key: '3' },
        { name: "Zuet", key: '4' },
    ]
    return (
        <View style={stylesList.viewstyle}>
            <FlatList
                data={uni}
                renderItem={function ({ item }) {
                    return <Text style={stylesList.textStyle}>{item.name}</Text>
                }}
            />

        </View>
    )
}
const stylesList = StyleSheet.create(
    {
        textStyle:
        {
            fontSize: 30,
            color: "black",
            alignSelf: "center",
            marginVertical: 30
        },
        viewstyle:
        {
            borderColor: "red",
            borderWidth: 5
        }

    }
)



export default Listview