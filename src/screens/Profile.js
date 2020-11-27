import React from "react"
import { Text, StyleSheet, View, Button, Image, TouchableOpacity, Animated, Dimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"


const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const Profile = (props) => {
    return (<View>
        <Text style={styles.textLogoStyle}>Profile</Text>
        <View style={{ width: 200, height: 180, alignSelf: "center", marginBottom: 30 }}>
            <Image
                alignSelf='center'
                source={require("./../../assets/img_self.jpg")}
                style={{ width: 110, height: 180, alignSelf: "center" }}
            />
        </View>
        <Text style={styles.textstyle}>Name: Zarif Hossain {"\n"}
                                        Student Id : 170042019 {"\n"}
                                        Programme : Swe {"\n"}
            
                                        Semester : 6th {"\n"}
                                        Email : zarifh493@gmail.com {"\n"}



        </Text>
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
            borderWidth:1,
            padding:10
            
            
            
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

export default Profile