import { users } from '../../../api/users';

const initialState = users;

const usersReducer = (state = initialState, action) => {
  return state;
}

export default usersReducer;