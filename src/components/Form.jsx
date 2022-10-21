import { useState, useEffect } from "react"
import styled from "@emotion/styled"

import useSelectCurrency from "../hooks/useSelectCurrency"
import { currencies } from "../data/currencies"
import Error from "./Error"

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`

const Form = () => {

  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [ currency, SelectCurrency ] = useSelectCurrency('Choose your Currency', currencies);
  const [ cryptocurrency, SelectCryptocurrency ] = useSelectCurrency('Choose your Cryptocurrency', criptos);

  useEffect(() => {
    const requestAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
      const response = await fetch(url)
      const outputData = await response.json()
      
      const CriptosArray = outputData.Data.map(cripto => {
        const object = {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName
        }

        return object;
      })
      
      setCriptos(CriptosArray)
    }
    requestAPI()
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(currency, cryptocurrency);
    if([currency, cryptocurrency].includes('')) {
      console.log('error');
      return;
    }
  }

  return (
    <>
      {error && <p>All fields are required</p>}
      <form onSubmit={handleSubmit}>
        <SelectCurrency />
        <SelectCryptocurrency />

        <InputSubmit 
          type="submit"
          value="Get Price"
        />
        
      </form>
    </>
  )
}

export default Form