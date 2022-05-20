import { useContext } from "react";
import incomeIgm from "../../assets/income.svg"
import outcomeIgm from "../../assets/outcome.svg"
import totalIgm from "../../assets/total.svg"
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionContext)
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === "income") {
      acc.incomes += transaction.amount
      acc.total += transaction.amount
    }
    if (transaction.type === "outcome") {
      acc.outcomes += transaction.amount
      acc.total -= transaction.amount
    }
    return acc
  }, {
    incomes: 0,
    outcomes: 0,
    total: 0
  })
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeIgm} alt="income" />
        </header>
        <strong>{new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",

        }).format(summary.incomes)}</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeIgm} alt="outcome" />
        </header>
        <strong>- {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",

        }).format(summary.outcomes)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIgm} alt="total" />
        </header>
        <strong>{new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",

        }).format(summary.total)}</strong>
      </div>
    </Container>
  )
}
