import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      token: null,
      localID: null,
      error: null,
      loading: false,
      authRedirectPath: '/',
    };
  });

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should store token upon login', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.AUTH_SUCCESS,
        idToken: 'idToken',
        localId: 'localId',
      }),
    ).toEqual({
      token: 'idToken',
      localID: 'localId',
      error: null,
      loading: false,
      authRedirectPath: '/',
    });
  });
});
