import { navigationActions } from 'react-navigation';
import * as types from '../constants/actions';
import { AppNavigator } from '../navigators/AppNavigator';

export const ROUTE_HOME = 'ROUTE_HOME';

const firstAction = AppNavigator.router.getActionForPathAndParams(ROUTE_HOME);
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}

export default nav;
