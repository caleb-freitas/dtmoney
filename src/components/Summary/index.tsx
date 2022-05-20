import { useContext } from "react";
import incomeIgm from "../../assets/income.svg"
import outcomeIgm from "../../assets/outcome.svg"
import totalIgm from "../../assets/total.svg"
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function Summary() {
  const transactions = useContext(TransactionContext)
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeIgm} alt="income" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeIgm} alt="outcome" />
        </header>
        <strong>-R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIgm} alt="total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}
