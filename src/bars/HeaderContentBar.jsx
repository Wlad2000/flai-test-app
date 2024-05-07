/****************************************************************************
** HEADER BAR
** component for CONTENT section
**
**
****************************************************************************/
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 2.3%;
  padding-left: 6%;
  padding-right: 6%;
  flex-wrap: nowrap;
`;
const Title = styled.p`
  display: flex;
  font-weight: 700;
  color: #404044;
  align-items: center;
justify-content: center;
`;
const ContentBox = styled.div`
  display: flex;
column-gap: 5%;
flex-wrap: nowrap;
`
const Button = styled.button`
align-items: center;
display: flex;
border: none;
color: ${(props) => props.primary ? "#3C6DFF" : "gray"};
background: none;
font-size: 14px;
column-gap: 10%;
&:hover{
    background: #212122;
  }
`;
const Status = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: column;
font-size: 13px;
color: #404044;
align-items: center;
justify-content: center;
`;

const HeaderContentBar = () => {
    return (
        <Container>
            <Title>AI PREDICTION</Title>

            <ContentBox>
                <Status>
                    Last update: 13.03.2024<br />
                    Date added to the platform: 17.12.2023
                </Status>

                <Button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2.5C5.86417 2.5 2.5 5.865 2.5 10H4.16667C4.16667 6.78333 6.78417 4.16667 10 4.16667C11.8209 4.16667 13.4377 5.014 14.5068 6.3265L12.5 8.33333H17.5V3.33333L15.695 5.13835C14.3207 3.52639 12.2804 2.5 10 2.5ZM15.8333 10C15.8333 13.2158 13.2158 15.8333 10 15.8333C8.17909 15.8333 6.56233 14.986 5.49316 13.6735L7.5 11.6667H2.5V16.6667L4.30501 14.8617C5.6793 16.4736 7.71962 17.5 10 17.5C14.1358 17.5 17.5 14.1358 17.5 10H15.8333Z" fill="#94969C" />
                    </svg>
                    Update
                </Button>
                <Button primary>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_448)">
                            <path d="M3.33301 14.1641V15.8307C3.33301 16.2728 3.5086 16.6967 3.82116 17.0092C4.13372 17.3218 4.55765 17.4974 4.99967 17.4974H14.9997C15.4417 17.4974 15.8656 17.3218 16.1782 17.0092C16.4907 16.6967 16.6663 16.2728 16.6663 15.8307V14.1641" stroke="#3C6DFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.83301 9.16406L9.99967 13.3307L14.1663 9.16406" stroke="#3C6DFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 3.33594V13.3359" stroke="#3C6DFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_448">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    Download
                </Button>
            </ContentBox>
        </Container >
    )
}

export default HeaderContentBar