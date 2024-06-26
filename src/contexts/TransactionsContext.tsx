import React, { createContext, useEffect, useState } from "react";



interface Transaction {
  id: number, 
  category: string, 
  type: "income" | "outcome", 
  description: string, 
  price: number, 
  createdAt: string,
  

}

interface TransactionContextType {
  transactions: Transaction[]
}


export const TransactionsContext = createContext({} as TransactionContextType);



interface TransactionsProviderProps {
  children: React.ReactNode
}

export function TransactionsProvider ({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])



  useEffect(() => {

    async function loadTransactions() {
      const response = await fetch("http://localhost:3333/transactions");

      const data = await response.json();

      setTransactions(data)

    }
   

    loadTransactions();

  }, [])


  return (
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider>
  )

}