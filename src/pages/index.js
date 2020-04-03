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
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background: ${({bg}) => bg};
  padding: 4rem 1rem;
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
  padding: 1rem;
  width: 100%;
  max-width: calc(100% / 3);
  margin: 1em;
  color: white;
`;
const CardImage = styled.div`
  background: url(${({bg}) => bg}) no-repeat 100%;
  background-position: center;
  object-fit: contain;
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;
const Quote = styled.h3`
  font-size: 2rem;
  font-style: italic;
  padding: 2rem;
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
          <Cards>
            <Card>
              <CardImage bg={carrot} />
              <h3>
                Quality
              </h3>
              <p>
                Fresh ingredients for tasty, home-cooked dinners.
              </p>
            </Card>
            <Card>
              <CardImage bg={brusq} />
              <h3>
                Simplicity
              </h3>
              <p>
                Easy to follow recipes and perfectly measured ingredients.
              </p>
            </Card>
            <Card>
              <CardImage bg={crab} />
              <h3>
                Variety
              </h3>
              <p>
                From family classics and ten minute meals to Fine Dine In.
              </p>
            </Card>
          </Cards>
        </Container>
      </Section>
      <Section bg="#ccc">
        <Quote>
          "The best decision for my partner and I as we both work long hours! We enjoy cooking from scratch, as we know what goes into what we are eating! There is a fantastic range of meals available, all super tasty! 100% recommend to anyone!"
        </Quote>
      </Section>
    </Wrapper>
  </>
)
