import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "./services/api"

export interface Transaction {
  id?: number
  title: string
  amount: number
  type: string
  category: string
  createdAt?: string
}

export type TransactionInput = Omit<Transaction, "id" | "createdAt">

export interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => void
}

export interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api.get("/transactions")
      .then(response => setTransactions(response.data))
  }, [])

  function createTransaction(transaction: Transaction) {
    api.post("/transactions", transaction)
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
