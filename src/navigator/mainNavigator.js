import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile191060Navigator from '../features/UserProfile191060/navigator';
import Tutorial191059Navigator from '../features/Tutorial191059/navigator';
import NotificationList191031Navigator from '../features/NotificationList191031/navigator';
import Settings191030Navigator from '../features/Settings191030/navigator';
import Settings191022Navigator from '../features/Settings191022/navigator';
import UserProfile191020Navigator from '../features/UserProfile191020/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile191060: { screen: UserProfile191060Navigator },
Tutorial191059: { screen: Tutorial191059Navigator },
NotificationList191031: { screen: NotificationList191031Navigator },
Settings191030: { screen: Settings191030Navigator },
Settings191022: { screen: Settings191022Navigator },
UserProfile191020: { screen: UserProfile191020Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
