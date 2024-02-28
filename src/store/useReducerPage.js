
const initialState = {
  name: '',
  email: '',
  age: 0
};

export const userReducerPage = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_AGE':
      return { ...state, age: action.payload };
    default:
      return state;
  }
};


