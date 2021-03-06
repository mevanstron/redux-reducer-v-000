export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    default:
      return state;

    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(friend => friend.id !== action.id)}
      return state;
  }
}
