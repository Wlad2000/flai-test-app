/****************************************************************************
** ADDS 
** component for RIGHT section
**
**
****************************************************************************/
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  padding: 5%;
  flex-wrap: nowrap;
  flex-direction: column;
  background: #D1FD0A;
`;
const Text = styled.p`
width:  ${(props) => props.width && props.width};
height:  ${(props) => props.height && props.height};
display: flex;
color:  ${(props) => props.color ? props.color : "white"};
font-size: ${(props) => props.fontSize ? props.fontSize : '18px'};
align-items: center;
column-gap: 0.5%;
font-weight:  ${(props) => props.weight && props.weight};
 `;
const Button = styled.button`
margin-top: 2.5%;
padding: 2%;
width: 40%;
display: flex;
background-color: black;
border: none;
color:  ${(props) => props.color ? props.color : "white"};
align-items: center;
justify-content: center;
font-weight:  700;
font-size:16px;
 `;
const Advertising = () => {
    return (
        <Container>
            <Text fontSize='12px' weight='600' color='#6F8800'> Free Plan</Text>
            <Text fontSize='16px' weight='700' color='black'> There are 10 free requests left</Text>
            <Button>Buy Premium</Button>
        </Container >
    )
}

export default Advertising