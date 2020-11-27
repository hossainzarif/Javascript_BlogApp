import React from "react"
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from "react-native-gesture-handler"


const Faculties = () => {

    const uni = [
        { name: "Professor X", key: '1' },
        { name: "Professor Y", key: '2' },
        { name: "Professor Z", key: '3' },
        { name: "Professor X", key: '4' },
        { name: "Professor A", key: '5' },
        { name: "Professor B", key: '6' },
        { name: "Professor C", key: '7' },
        { name: "Professor D", key: '8' },
        { name: "Professor Y", key: '9' },
        { name: "Professor Z", key: '10' },

    ]
    return (
        <View style={styles.viewstyle}>
            <Text style={styles.textLogoStyle}>Faculties</Text>
            <FlatList
                data={uni}
                renderItem={function ({ item }) {
                    return <Text style={styles.textStyle}>{item.name}</Text>
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create(
    {
        textStyle:
        {
            fontSize: 25,
            color: "black",
            alignSelf: "center",
            marginVertical: 20
        },
        viewstyle:
        {
            borderColor: "black",
            borderWidth: 1
        },
        textLogoStyle:
        {
            fontSize: 32,
            width: 400,
            height: 50,
            textAlign: 'center',
            backgroundColor: '#e2e5de',
            color: "#4b723d",
            alignSelf: "center",

        },
    }
)
export default Faculties