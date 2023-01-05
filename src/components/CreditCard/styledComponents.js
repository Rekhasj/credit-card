import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 100vh;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #3b4b69;
  width: 50%;
  height: 100%;
`
export const CreditCardImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 50%;
  width: 80%;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const Heading = styled.h1`
  text-decoration: #ffd773 underline;
  color: #ffffff;
  font-size: 20px;
`

export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border-radius: 10px;
`
export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 50%;
  box-shadow: 1px 1px 1px 1px #475569;
  border-radius: 10px;
  padding: 20px;
`

export const PaymentMethod = styled.h1``

export const UserInput = styled.input`
  margin: 10px;
`

export const CardName = styled.p`
  color: #d3d9e0;
  font-size: 20px;
  font-family: 'Robot';
  font-weight: 400;
  display: flex;
  flex-direction: column;
`
