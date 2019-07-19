const testReducer = (state = ['Tri','Truong'], action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, 'Nguyen']
      default:
        return state;
    }
  }
  
  module.exports = testReducer;
  