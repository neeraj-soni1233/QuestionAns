import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Loginpage from '../screens/Loginpage';
import QuestionPage from '../screens/QuestionPage';


const QuesNavigator = createStackNavigator({
   // LoginPage : Loginpage
    Loginpage: {
        screen: Loginpage,
    },
    QuestionPage : {
        screen: QuestionPage,
        navigationOptions: {
            title: 'Home',
            header: null,//this will hide the header

        },
    }

});
export default createAppContainer(QuesNavigator);
