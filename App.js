import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/searchScreen';

const navigator=createStackNavigator({
  MySearch: SearchScreen
},{
  initialRouteName:'MySearch',
  defaultNavigationOptions:{
    title:'Business Search'
  }
});

export default createAppContainer(navigator);
