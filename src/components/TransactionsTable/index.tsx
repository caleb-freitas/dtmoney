import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

export function TransactionsTable() {
  const transactionsData = useContext(TransactionContext)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api.get("/transactions")
      .then(response => setTransactions(response.data))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",

                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("en-US").format(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
