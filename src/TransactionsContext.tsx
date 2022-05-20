import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "./services/api"

export interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api.get("/transactions")
      .then(response => setTransactions(response.data))
  }, [])

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )
}