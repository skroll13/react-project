import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses"

export const AddExpense = (data) =>{
    return{
        type: ADD_EXPENSE,
        data,
    }
}

export const deleteExpense= (data) =>{
    return{
        type: DELETE_EXPENSE,
        data
    }
}