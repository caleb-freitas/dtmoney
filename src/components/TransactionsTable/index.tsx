import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then(response => response.json())
      .then(data => console.log(data))
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
          <tr>
            <td>Website development</td>
            <td className="deposit">$ 3.000,00</td>
            <td>Job</td>
            <td>18/05/2022</td>
          </tr>
          <tr>
            <td>SSD</td>
            <td className="withdraw">- $ 200,00</td>
            <td>Job</td>
            <td>17/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}