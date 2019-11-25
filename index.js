/**
 * @format
 */
import { AppRegistry } from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import VerticalScrollView from './components/VerticalScrollView';


AppRegistry.registerComponent(appName, () => VerticalScrollView);