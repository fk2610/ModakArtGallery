import { AppRegistry } from 'react-native';

/**
 * The internal dependencies.
 */
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
