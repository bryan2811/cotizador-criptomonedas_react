import styled from "@emotion/styled"

const Container = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Img = styled.img`
  display: block;
  width: 120px;
`

const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`

const Info = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;

  return (
    <Container>
      <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt="Crypto Image" />
      <div>
        <Price>The price is: <span>{PRICE}</span></Price>
        <Info>The highest price of the day: <span>{HIGHDAY}</span></Info>
        <Info>The lowest price of the day: <span>{LOWDAY}</span></Info>
        <Info>Variation in the last 24 hours: <span>{CHANGEPCT24HOUR}</span></Info>
        <Info>Last update: <span>{LASTUPDATE}</span></Info>
      </div>
    </Container>
  )
}

export default Result