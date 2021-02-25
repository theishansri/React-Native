import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SearchScreen from './src/screens/searchScreen';
import ResultsShowScreen from './src/screens/resulltsShowScreen';
const navigator=createStackNavigator({
  MySearch: SearchScreen,
  ResultsShow: ResultsShowScreen
},{
  initialRouteName:'MySearch',
  defaultNavigationOptions:{
    title:'Business Search'
  }
});

export default createAppContainer(navigator);
