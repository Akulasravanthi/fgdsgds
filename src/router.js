import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/login'
import Dashboard from './components/dashboard'

const AppNavigation = createStackNavigator(
    {
        login:{
            screen:Login,
            navigationOptions:{
                header:null
            }
        },
        dashboard:{
            screen:Dashboard,
            navigationOptions:{
                header:null
            }
        },
    },
{
  initialRouteName : "login"  
}
);
export default AppNavigation;