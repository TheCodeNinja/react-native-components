/**
 * @format
 */
import { AppRegistry } from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import VerticalScrollView from './components/VerticalScrollView';
import HorizontalScrollView from './components/HorizontalScrollView';
import ViewPagerDemo from './components/ViewPagerDemo';
import BasicFlatList from './components/BasicFlatList';
import HorizontalFlatList from './components/HorizontalFlatList';
import BasicSectionList from './components/BasicSectionList';

AppRegistry.registerComponent(appName, () => BasicSectionList);