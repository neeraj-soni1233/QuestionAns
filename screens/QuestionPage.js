import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Constants from 'expo-constants';

const AnswerData = [[
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Answer 1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Answer 1',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Answer 1',
    }
],
[
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Answer 2',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Answer 2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Answer 2',
    }
],
[
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Answer 3',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Answer 3',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Answer 3',
    }
],
[
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Answer 4',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Answer 4',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Answer 4',
    }
],
[
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Answer 5',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Answer 5',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Answer 5',
    }
],
[
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Answer 6',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Answer 6',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Answer 6',
    }
]
];



const QuestionData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Question 1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Question 2',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Question 3',
    },

    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Question 4',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Question 5',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Question 6',
    }
];


function Item({ id, title, selected, onSelect }) {
    return (
        <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
                styles.item,
                { backgroundColor: selected ? '#008000' : '#99CCFF' },
            ]}
        >
            <Text>{title}</Text>

        </TouchableOpacity>
    );
}

export default function QuestionPage(props) {
    const [text, setText] = React.useState('Quiz');
    const [userName, setUserName] = React.useState('Neeraj');
    const [question, setQuestion] = React.useState(' Q1: Hi What React native');
    const [selected, setSelected] = React.useState(new Map());
    const [answerData, setAnswerData] = React.useState([]);
    const [questionIndex, setQuestionIndex] = React.useState(0);
    const [nextButtonText, setNextButtonText] = React.useState('Next');

    function nextButtonClicked(index) {
        index = questionIndex
        item = index + 1
        setQuestionIndex(item)
       if (item < QuestionData.length){
           
            setAnswerData(AnswerData[item])
            setQuestion(QuestionData[item].title)
       }
       else {
        setNextButtonText('Submit')
         console.log(item)
        if (item > QuestionData.length){
        Alert.alert('yoyr Answer Submitted')
        }
      

       }
        
       
    }

    useEffect(() => {
        setAnswerData(AnswerData[0])
        setQuestion(QuestionData[questionIndex].title)

    }, []);

    const onSelect = React.useCallback(
        id => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));

            setSelected(newSelected);
        },
        // [selected], // if we want multiple selected
        []
    );


    return (
        <View style={styles.container}>
            <View style={styles.Label}>
                <TextInput width={100} disabled={true}
                    label={text} mode="outlined"
                />
                <TextInput width={100} disabled={true}
                    label={userName} mode="outlined"
                />

            </View>

            <View style={styles.QuestionText} >
                <TextInput disabled={true}
                    mode="flat"
                    value={question}
                    multiline={true}
                    onChangeText={question => setQuestion(question)}
                />
            </View>

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={answerData}
                    renderItem={({ item }) => (
                        <Item
                            id={item.id}
                            title={item.title}
                            selected={!!selected.get(item.id)}
                            onSelect={onSelect}
                        />
                    )}
                    keyExtractor={item => item.id}
                    extraData={selected}
                />
            </SafeAreaView>

            <View style={styles.button}>
                <Button color="#008000" width={150} mode='contained'  >
                    Back
                 </Button>

                <Button color="#008000" width={150} mode='contained'
                    onPress={nextButtonClicked} >
                    {nextButtonText}
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

    listContainer: {
        flex: 1,
        marginTop: Constants.statusBarHeight,

    },
    item: {
        backgroundColor: '#99CCFF',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,

    },


});


