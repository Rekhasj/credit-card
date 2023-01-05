import {useState} from 'react'
import {
  MainContainer,
  CreditCardContainer,
  Heading,
  CreditCardImage,
  PaymentCard,
  InputCard,
  CardName,
  PaymentMethod,
  UserInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setNumber] = useState('')
  const [cardName, setName] = useState('')

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <CreditCardImage data-testid="creditCard">
          <CardName>{cardNumber}</CardName>
          <CardName>CARDHOLDER NAME</CardName>
          <CardName>{cardName}</CardName>
        </CreditCardImage>
      </CreditCardContainer>
      <PaymentCard>
        <InputCard>
          <PaymentMethod>Payment Method</PaymentMethod>
          <UserInput placeholder="Card Number" onChange={onChangeNumber} />
          <UserInput placeholder="Cardholder Name" onChange={onChangeName} />
        </InputCard>
      </PaymentCard>
    </MainContainer>
  )
}
export default CreditCard
