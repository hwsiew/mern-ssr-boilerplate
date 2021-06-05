const reducer = (state = {num:10}, action) => {

	switch(action.type){

		case 'MINUS':
			state.num--
			return {...state};

		default: return state;
	}

};

export default reducer; 