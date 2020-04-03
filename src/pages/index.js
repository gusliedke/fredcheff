import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import logo from '../../static/logo.png'
import homepage from '../../static/homepage.jpg'
import crab from '../../static/crab.jpg'
import brusq from '../../static/brusq.jpg'
import carrot from '../../static/carrot.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto";
  }
  h1 {
    font-family: "Roboto Mono";
  }
`

const Wrapper = styled.div`
  background: #fff;
`
const Homepage = styled.section`
  background: url(${homepage}) no-repeat;
  object-fit: contain;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`
const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background: ${({bg}) => bg};
`
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
`
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  margin: 1rem;
`;
const Slogan = styled.h2`
  color: #fff;
  font-size: 3rem;
  font-family: "Roboto Mono";
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
  background: url(${({bg}) => bg}) no-repeat 100%;
  background-position: center;
  object-fit: contain;
  padding: 1rem;
  width: 100%;
  max-width: calc(100% / 3);
  height: 50vh;
  margin: 1em;
`;
const Heading = styled.h2`
  color: white;
`;

export default () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Header>
        <Logo src={logo} alt="Fred Chef" width="100" height="100" />
        <h1>Fred Liedke Chef</h1>
      </Header>
      <Homepage>
        <Container>
          <Slogan>Freshly made direct to you.</Slogan>
        </Container>
      </Homepage>
      <Section bg="#222">
        <Container>
          <Heading>Recipes</Heading>
          <Cards>
            <Card bg={carrot}>
              <h3>
                Choose
              </h3>
            </Card>
            <Card bg={brusq}>
              <h3>
                Call
              </h3>
            </Card>
            <Card bg={crab}>
              <h3>
                Delivery
              </h3>
            </Card>
          </Cards>
        </Container>
      </Section>
    </Wrapper>
  </>
)
