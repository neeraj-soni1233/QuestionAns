import React from 'react';
import {
    Text, StyleSheet, View, StatusBar, Image,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';


 function skipButtonClicked()  {
    console.log('skip button clicked')

}
function submitButtonClicked() {
console.log('submit button clickeddd')
}

const Loginpage = (props) => {
    const [userName, setuserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={styles.tinyLogo}
                    source={require('../assets/images/favicon1.png')}
                />
            </View>
            <View style={styles.textInput} >
                <TextInput
                    label="UserName" mode="outlined"
                    value={userName}
                    onChangeText={userName => setuserName(userName)}
                />
            </View>
            <View style={styles.textInput} >
                <TextInput
                    label="Password" mode="outlined"
                    value={password}
                    onChangeText={password => setPassword(password)}
                />
            </View>
            <View style = {styles.button}>  
                <Button color = "#008000" width = {150}  mode="contained" onPress={skipButtonClicked}>
                    Skip
                     </Button>
                     <Button color = "#008000"  width = {150}   mode="contained" onPress={()=>
                        {props.navigation.navigate({routeName:'QuestionPage'})}}>
                    Submit

                    

                     </Button>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    image: {
        paddingLeft: 30,
        paddingTop: 50
    },
    tinyLogo: {

        width: 50,
        height: 50,

    },
    textInput: {
        backgroundColor: '#fff',
        padding: 20
    },
    button: {
      
       flexDirection:'row',
       justifyContent: 'space-between',
       padding:20,
        
    },
});


export default Loginpage

