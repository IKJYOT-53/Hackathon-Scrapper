import React from 'react'
import Card from './Card'
import styled from 'styled-components'
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap:wrap;

`
const Hackathon = ({hackathon}) => {
    return <Wrapper>
        {hackathon.map(hack => {
            return <Card hack = {hack} />
        })}
        </Wrapper>
}

export default Hackathon