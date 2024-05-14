import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles"



export function Transactions () {
  return (
    <div>
      <Header/>
      <Summary/>

      <TransactionContainer>
        <SearchForm/>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 17.400,00
                </PriceHighlight></td>
              <td>Venda</td>
              <td>12/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Academia</td>
              <td>
                <PriceHighlight variant="outcome">
                -R$ 59,00
                </PriceHighlight>
              </td>
              <td>Atividade</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}