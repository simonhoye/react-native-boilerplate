import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import AppWithNavigationState from './navigators/AppNavigator';


const ReactNativeBoilerplate = () => (
    <Provider store={store}>
        <AppWithNavigationState />
    </Provider>
);



AppRegistry.registerComponent('ReactNativeBoilerplate', () => ReactNativeBoilerplate);
