import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
width:300px;
height:300px;
border-radius:1rem;
box-shadow: rgba(17, 140, 79, 0.3) 0px 0px 0px 3px;
display:grid;
grid-template-columns:repeat(16,1fr);
grid-template-rows:repeat(16,1fr);
margin:1rem;
font-family:sans-serif;
flex-direction:column;
`
const Heading = styled.h1`
grid-row:3/7;
grid-column:1/17;
font-size:1.5rem;
text-align:center;
`
const Cash = styled.h2`
grid-row: 9/14;
grid-column:3/17;
margin-top:1rem;
font-size:2rem;
background-image:linear-gradient(to right bottom,lightgreen,lightblue);
background-clip:text;
color:#118C4F;
`
const Link = styled.a`
grid-row: 13;
grid-column:6/16;
margin-top: 1rem;
color:#118C4F;
`
const Card = ({hack}) => {
  return (
    <Container>
        <Heading>{hack.name}</Heading>
        <Cash>{hack.prize}</Cash>
        <Link href={hack.link} target="_blank">Link to Website</Link>
    </Container>
  )
}

export default Card