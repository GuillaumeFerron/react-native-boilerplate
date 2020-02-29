/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { init } from 'utils/init'
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

init()
