import {Navigation} from "react-native-navigation";
import App from './App';
import Results from './screens/Results';
import Tests from './screens/Tests';
import Drawer from './screens/Drawer';
import Regulations from './screens/Regulations';
import {Dimensions} from 'react-native'


Navigation.registerComponent('App', () => App);
Navigation.registerComponent('Results', () => Results);
Navigation.registerComponent('Tests', () => Tests);
Navigation.registerComponent('Drawer', () => Drawer);
Navigation.registerComponent('Regulations', () => Regulations);


const { width } = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      elevation: 0,
      visible: true,
      drawBehind: true,
      animate: false,
      buttonColor: 'white',
      title: {
        color: 'white',
        alignment: 'center'
      },
      background: {
        color: 'transparent'
      }
    }
  });
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'drawerId',
            name: 'Drawer',
            fixedWidth: width
          }
        },
        center: {
          stack: {
            id: 'MAIN_STACK',
            children: [
              {
                component: {
                  name: 'App',
                }
              },
            ]
          }
        }
      },
    }
  });
});