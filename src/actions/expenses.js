import database from '../firebase/firebase';

// component calls action generator
// action generator return a function
// component dispatches function
// function runs

// add expense action generator
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense,
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0,
        } = expenseData;

        const expense = {
            description, note, amount, createdAt
        };

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// remove expense action generator
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id,
});

// edit expense action generator
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
});
