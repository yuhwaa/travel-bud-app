import React, { useContext } from 'react'

const BudgetsContext = React.createContext()

export function useBudgets() {
    return useContext(BudgetContext)
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpenses] = useState([])
    function getBudgetExpenses() {}
    function addExpenses() {}
    function addBudget() {}
    function deleteBudget() {}
    function deleteExpense() {}
    return (
      <BudgetContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpenses,
        addBudget,
        deleteBudget,
        deleteExpense
      }}>{childeren}</BudgetContext.Provider>
}