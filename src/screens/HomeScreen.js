import React from "react"
import { Text, StyleSheet, View, Button, Image, TouchableOpacity, Animated, Dimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

import Ripple from 'react-native-material-ripple';


const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const HomeScreen = (props) => {
    return (<View>
        <Text style={styles.textLogoStyle}>Home</Text>
        <View style={{ width: 200, height: 180, alignSelf: "center", marginBottom: 30 }}>
            <Image
                alignSelf='center'
                source={require("./../../assets/iut.png")}
                style={{ width: 110, height: 180, alignSelf: "center" }}
            />
        </View>
        <Text style={styles.textstyle}>Department of CSE</Text>
        <Text style={styles.textstyle}>Programme : SWE</Text>

        <TouchableOpacity
            onPress={
                function () {
                    props.navigation.navigate("Profile")
                }
            }
        >
            <Text style={styles.textbuttonStyle}>My Profile</Text>


        </TouchableOpacity>

            <Ripple>
            <TouchableOpacity
                style={styles.buttontextStyle}
                onPress={
                    function () {
                        props.navigation.navigate("Semesters")
                    }
                }>

                <Text style={styles.buttonText}>
                    Semester Wise Course List
                </Text>
            </TouchableOpacity >
            </Ripple>
        <Animated.View>
            <TouchableOpacity
                style={styles.buttontextStyle}
                onPress={
                    function () {
                        props.navigation.navigate("Faculties")
                    }
                }>

                <Text style={styles.buttonText}>
                    List of Faculty Members
                </Text>
            </TouchableOpacity >
        </Animated.View>
    </View>
    )
}

const styles = StyleSheet.create(
    {
        textstyle:
        {
            fontSize: 25,
            color: "black",
            alignSelf: "center",


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
            marginBottom: 10

        },
        buttontextStyle:
        {
            height: 45,
            width: 350,
            backgroundColor: "#339933",
            alignSelf: "center",
            marginLeft: 50,

            marginRight: 50,
            marginTop: 20,
            marginBottom: 5,
            elevation: 10,

        },

        buttonText:
        {
            fontSize: 22,
            color: "white",
            textAlign: 'center',
            marginTop: 6,

        },

        imageStyle:
        {
            alignSelf: 'center',
            height: '20',
            width: '10',

            marginBottom: 10
        },

        textbuttonStyle:
        {
            fontSize: 25,

            marginTop: 10,
            marginBottom: 5,
            alignSelf: "center",
            color: '#339933',
        }
    }
)

export default HomeScreen