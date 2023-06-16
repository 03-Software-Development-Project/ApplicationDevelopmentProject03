/**
 * @format
 */

import {AppRegistry} from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'
import {FirebaseGateway} from './src/gateways'

AppRegistry.registerComponent(appName, () => App)

try {
  FirebaseGateway.test()
} catch (e) {
  console.log(e)
}
