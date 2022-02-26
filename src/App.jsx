import axios from "axios"
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import styled from "styled-components";
const Heading = styled.nav`
display: flex;
align-items:center;
justify-content: center;
flex-direction:column;
`
const Header = styled.h1`
font-size:2rem;
font-family:monospace;
margin-top:1rem;
`
const Header2 = styled.h2`
font-size:1rem;
font-family:monospace;
margin-top:.5rem;
margin-bottom: .5rem;
`
const App = () => {
  const [hackathonData,setHackathonData] = useState([{name:"loading...",link:"loading...",date:"loading..."}]);
  useEffect(() => {
    axios.get("https://hackathon-scraper.herokuapp.com/devpost")
  .then(resp =>{
     const data = resp.data
     setHackathonData(data)
  })
  }, [])
  return <div>
    <Heading>
      <Header>Hackathon Scrapper</Header>
      <Header2>from D2C,DevPost,MLH,DevFolio</Header2>
    </Heading>
  <Cards hackathon={hackathonData}/>
  </div>
};

export default App;