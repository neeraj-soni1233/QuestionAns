import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';



export default function QuestionPage(props) {
    const [text, setText] = React.useState('Quiz');
    const [userName, setUserName] = React.useState('Neeraj');
    const [question, setQuestion] = React.useState(' Q1: Hi What is React native');
    return (
        <View style={styles.container}>

            {/* <View style={styles.topLabel}>
                <Button  width={150} mode= 'outlined' mode="text" >
                    Quiz
                 </Button>

                <Button borderColor={'#008000'} width={150} mode='outlined' mode="text" >
                    Neeraj
                 </Button>
            </View> */}
            <View style={styles.Label}>
                <TextInput  width = {100}disabled={true}
                    label= {text} mode="outlined"
                />
                <TextInput width = {100} disabled={true}
                    label= {userName} mode="outlined"
                />

            </View>

            <View style = {styles.QuestionText} >
                <TextInput disabled={true} 
                   mode="flat"
                    value={question}
                    onChangeText={question => setQuestion(question)}
                />

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    topLabel1: {
        flexDirection: "row",
        paddingLeft: 30,
        paddingTop: 50,
        borderColor: '#008000',
        borderBottomWidth: 1,
    },
    topLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,

    },
    Label: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'space-between',
    },
    QuestionText: {
        backgroundColor: '#fff',
        padding: 20,
        
    },
     theme : {
        color :'#A9A9A9',
        backgroundColor: "transparent" 
        }
      
      

});
