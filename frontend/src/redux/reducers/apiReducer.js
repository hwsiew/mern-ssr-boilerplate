export default ( state = {}, action) => {

	switch(action.type){
		case 'API_DATA':
			return action.payload;
		default: return state;
	}
}