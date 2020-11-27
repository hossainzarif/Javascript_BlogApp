import React from "react"
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from "react-native-gesture-handler"


const Courses = () => {

    const uni = [
        { name: "Swe-4103", key: '1' },
        { name: "Swe-4201", key: '2' },
        { name: "Swe-4401", key: '3' },
        { name: "Swe-4301", key: '4' },
        { name: "Swe-4101", key: '5' },
        { name: "Swe-4501", key: '6' },
        { name: "Swe-4401", key: '7' },
        { name: "Swe-4301", key: '8' },
        { name: "Swe-4101", key: '9' },
        { name: "Swe-4501", key: '10' },

    ]
    return (
        <View style={styles.viewstyle}>
            <Text style={styles.textLogoStyle}>Courses</Text>
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
export default Courses