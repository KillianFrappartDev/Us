const initialState = { isLogged: false, id: null, fullName: null, image: null, gender: null, birthdate: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogged: true,
        id: action.payload.id,
        fullName: action.payload.fullName,
        image: action.payload.image,
        gender: action.payload.gender,
        birthdate: action.payload.birthdate
      };

    case 'LOGOUT':
      return { ...state, isLogged: false };

    default:
      return state;
  }
};

export default reducer;
