import { createSlice } from '@reduxjs/toolkit';

const initialState = {

	value:[{
    
		id: 'a7b9e435',

		name: 'Mini',

		model: 'Camry',

		yearOfRelease: 2023,

		brand: 'Toyota',

		color: 'Grey'

	}],

	cars: JSON.parse(`${localStorage.getItem('cars')}`) || [],

	trucks: JSON.parse(`${localStorage.getItem('trucks')}`) || [],

};

export const listReducer = createSlice({
	
	name: 'list',
  
	initialState,

	reducers: {

		add: (state, action:any) => {

			console.log('redux :: ', state.value)

			// Redux Toolkit allows us to write "mutating" logic in reducers. It

			// doesn't actually mutate the state because it uses the Immer library,

			// which detects changes to a "draft state" and produces a brand new

			// immutable state based off those changes

			return {...state, list: [...state.value, action.payload]}

    	},

		resetState(state) { return initialState },

  	}	

})

// Action creators are generated for each case reducer function
export const { add, resetState } = listReducer.actions

export default listReducer.reducer