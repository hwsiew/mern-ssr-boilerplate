import axios from 'axios';

const apiData = (data) => ({
	type: 'API_DATA',
	payload: data
})

/**
 * redux thunk which allow return a function with dispatch as an arguments
 */
export default () => (dispatch) => {
	return axios.get('https://jsonplaceholder.typicode.com/todos/1')
			.then(response => dispatch(apiData(response.data)));
}