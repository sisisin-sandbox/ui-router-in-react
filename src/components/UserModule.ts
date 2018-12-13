import { UserState } from './UserModule';
import { AppState } from '../App';
import { Dispatch } from 'redux';
import { router } from '../App';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { User } from './User';

export interface UserState {
  userId: number | null;
}

const initialState: UserState = {
  userId: null,
};

export function userReducer(state: UserState = initialState, action: AnyAction): UserState {
  switch (action.type) {
    case 'USERS_RESOLVE_PARAMS':
      return { userId: action.payload.userId };
    default:
      return state;
  }
}
const mapState = (state: AppState) => state.users;
const mapDispatch = (dispatch: Dispatch) => {
  return {
    init() {
      const { userId } = router.stateService.transition.params();
      dispatch({ type: 'USERS_RESOLVE_PARAMS', payload: { userId } });
    },
  };
};

export type UserProps = ReturnType<typeof mapDispatch> & UserState;

export const UserConatiner = connect(
  mapState,
  mapDispatch,
)(User);
