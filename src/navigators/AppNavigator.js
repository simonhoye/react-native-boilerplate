import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';

const routes = {
    ROUTE_HOME: { screen: HomeScreen }
}

const stackNavigatorConfig = {
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false
    }
};

export const AppNavigator = StackNavigator( routes, stackNavigatorConfig );

const AppWithNavigationState = ({ dispatch, nav }) => {
    return (
        <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    );
} ;

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    };
};

export default connect(mapStateToProps)(AppWithNavigationState);