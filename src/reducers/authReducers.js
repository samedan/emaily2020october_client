import { FETCH_USER } from "./../actions/types";

export default function (
  state = null,
  action
) {
  switch (action.type) {
    case FETCH_USER:
      // if 'action.payload' = "" then 'action.payload||false' it will return false
      return action.payload || false;
    default:
      return state;
  }
}
