import React from "react"
import { Text, StyleSheet, View, Button, Image, TouchableOpacity, Animated, Dimensions } from "react-native"



const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const Semesters = (props) => {
    return (<View>
        <Text style={styles.textLogoStyle}>Semesters</Text>
        <Animated.View>
            <TouchableOpacity
                style={styles.buttontextStyle}
                onPress={
                    function () {
                        props.navigation.navigate("Courses")
                    }
                }>

                <Text style={styles.buttonText}>
                    1st Semester
                </Text>
            </TouchableOpacity >
        </Animated.View>
        <Animated.View>
            <TouchableOpacity
                style={styles.buttontextStyle}
                onPress={
                    function () {
                        props.navigation.navigate("Courses")
                    }
                }>

                <Text style={styles.buttonText}>
                    2nd Semester
                </Text>
            </TouchableOpacity >
        </Animated.View>
        <Animated.View>
            <TouchableOpacity
                style={styles.buttontextStyle}
                onPress={
                    function () {
                        props.navigation.navigate("Courses")
                    }
                }>

                <Text style={styles.buttonText}>
                    3rd Semester
                </Text>
            </TouchableOpacity >
        </Animated.View>
        <Animated.View>
            <TouchableOpacity
                style={styles.buttontextStyle}
                onPress={
                    function () {
                        props.navigation.navigate("Courses")
                    }
                }>
                <Text style={styles.buttonText}>
                    4th Semester
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
            marginBottom: 100

        },
        buttontextStyle:
        {
            height: 45,
            width: 350,
            borderRadius: 50,
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

export default Semesters