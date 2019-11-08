export default (state = null, action) => {
  //   console.log('red', action);
  //   return null;
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
