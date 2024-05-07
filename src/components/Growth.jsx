/****************************************************************************
** Growth 
** component for CONTENT section
** contain chart 
**
****************************************************************************/
import React from 'react'
import styled from 'styled-components';
import StackedBarChart from '../items/StackedBarChart';
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 540px;
  background-color: #0D0D0E;
  flex-direction: column;
`
const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
;
`
const ContainerInfo = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  align-items: center;
justify-content: center;
  flex-direction: column;
  width: 100%;
`
const BannerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 100%;
`

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
const Teg = styled.div`
display: flex;
flex-wrap: nowrap;
border-radius: 50px;
background:  ${(props) => props.backgroundColor ? `${props.backgroundColor}` : 'transparent'};
width: ${(props) => props.width && props.width};
height: ${(props) => props.height ? props.height : '100%'};
padding: ${(props) => props.padding && props.padding};
color: ${(props) => props.color ? props.color : 'white'};
font-size: ${(props) => props.fontSize ? props.fontSize : '13px'};
align-items: center;
justify-content:  ${(props) => props.content && props.content};
margin-right: 10px;
column-gap: 3%;
font-weight:  ${(props) => props.weight && props.weight};
border:  ${(props) => props.border && props.border};
`;
const RangeSection = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 35px;
width: 100%;
margin-top: 2%;
`

const Growth = () => {
    return (
        <Container>
            <ContainerTitle>
                <Text color='#D1FD0A' width='100%' weight='700' fontSize='20px'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_569)">
                            <path d="M17 3.34001C18.5083 4.21087 19.7629 5.46054 20.6398 6.96531C21.5167 8.47009 21.9854 10.1778 21.9994 11.9194C22.0135 13.6609 21.5725 15.376 20.72 16.8947C19.8676 18.4135 18.6332 19.6832 17.1392 20.5783C15.6452 21.4734 13.9434 21.9628 12.2021 21.9981C10.4608 22.0333 8.74055 21.6132 7.21155 20.7793C5.68256 19.9453 4.39787 18.7265 3.48467 17.2435C2.57146 15.7605 2.06141 14.0647 2.005 12.324L2 12L2.005 11.676C2.061 9.94901 2.56355 8.26598 3.46364 6.79101C4.36373 5.31604 5.63065 4.09947 7.14089 3.2599C8.65113 2.42033 10.3531 1.98641 12.081 2.00045C13.8089 2.01449 15.5036 2.47601 17 3.34001Z" fill="#D1FD0A" />
                            <g clip-path="url(#clip1_1_569)">
                                <path d="M6.66699 15L9.33366 11L12.0003 12.3333L14.667 9L17.3337 11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_569">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_1_569">
                                <rect width="16" height="16" fill="white" transform="translate(4 5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    Growth
                </Text>
            </ContainerTitle>
            <ContainerInfo>
                <BannerSection>
                    <Teg weight='600' border='1px solid gray' width='22%'>
                        <Teg content='center' weight='700' fontSize='17px' color='black' width='18%' backgroundColor='linear-gradient(#e451d3, #f8c05f)'>
                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3753 6.125C11.0003 5.70833 10.5003 5.5 9.95866 5.5H6.12533C6.04199 5.5 6.00033 5.45833 5.95866 5.41667C5.91699 5.33333 5.91699 5.25 5.95866 5.16667C6.29199 4.41667 6.50033 3.75 6.66699 2.91667C6.79199 2.45833 6.83366 2.16667 6.83366 1.875C6.83366 0.666667 5.91699 0.208333 5.45866 0.125C5.37533 0.125 5.29199 0.125 5.25033 0.208333C5.20866 0.25 2.58366 4.04167 1.54199 5.08333C0.666992 5.91667 0.166992 6.95833 0.166992 8V10.75C0.166992 13.125 2.12533 15.0833 4.54199 15.0833H8.41699C9.79199 15.0833 10.917 14.0833 11.1253 12.7083L11.8337 7.625C11.917 7.08333 11.7503 6.54167 11.3753 6.125Z" fill="black" />
                            </svg>
                        </Teg>
                        High Trending Chance
                    </Teg>
                    <Teg weight='600' border='1px solid gray' width='28%'>
                        <Teg content='center' weight='700' fontSize='17px' backgroundColor='#00FF94' color='black' width='18%'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3333 3.33073L8.66667 7.33073L4.66667 8.9974L8.66667 10.6641L10.3333 14.6641L12 10.6641L16 8.9974L12 7.33073L10.3333 3.33073ZM2.75 5.2474L3.66667 7.9974L4.58333 5.2474L7.33333 4.33073L4.58333 3.41406L3.66667 0.664062L2.75 3.41406L0 4.33073L2.75 5.2474ZM4.25 12.4141L3.66667 10.6641L3.08333 12.4141L1.33333 12.9974L3.08333 13.5807L3.66667 15.3307L4.25 13.5807L6 12.9974L4.25 12.4141Z" fill="black" />
                            </svg>
                            8
                        </Teg>
                        Sound assessment from our AI
                    </Teg>
                    <Teg weight='600' border='1px solid gray ' width='18%'>
                        <Teg content='center' weight='700' fontSize='17px' backgroundColor=' #FFE600' color='black' width='32%'>
                            <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.00026 0C2.70104 0 0.0263672 2.67468 0.0263672 5.97389C0.0263672 9.90254 3.91049 11.7832 4.39709 12.221C4.89401 12.6679 5.30458 13.6699 5.47022 14.238C5.55059 14.5138 5.77651 14.6534 6.00026 14.6594C6.22456 14.6529 6.44993 14.5133 6.53031 14.238C6.69595 13.6699 7.10652 12.6685 7.60344 12.221C8.09004 11.7832 11.9742 9.90254 11.9742 5.97389C11.9742 2.67468 9.29948 0 6.00026 0ZM6.00026 7.60314C5.10038 7.60314 4.37102 6.87378 4.37102 5.97389C4.37102 5.07401 5.10038 4.34465 6.00026 4.34465C6.90015 4.34465 7.62951 5.07401 7.62951 5.97389C7.62951 6.87378 6.90015 7.60314 6.00026 7.60314Z" fill="black" />
                            </svg>
                            25%
                        </Teg>
                        Geo Popularity
                    </Teg>
                </BannerSection>
                <div style={{
                    width: '100%', marginTop: '2%'
                }}>
                    < StackedBarChart />
                </div>
                <RangeSection>
                    <Text color='#8E8F92' width='100%' weight='600' fontSize='15px' >
                        Date Range
                        <Teg weight='600' width='20%' backgroundColor=' #212122' content='space-between' padding='1.4%'>
                            Last Month
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L4 4L1 1" stroke="white" stroke-width="1.6" />
                            </svg>
                        </Teg>
                    </Text>
                    <Teg weight='600' width='12%' backgroundColor=' #212122' content='space-between' padding='1.2%'>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="14" height="14" rx="7" fill="#C704FE" />
                        </svg>
                        Growth
                    </Teg>
                    <Teg weight='600' width='17%' backgroundColor=' #212122' content='space-between' padding='1.2%'>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="14" height="14" rx="7" fill="#D1FD0A" />
                        </svg>
                        AI Prediction
                    </Teg>
                </RangeSection>
            </ContainerInfo >
        </Container >
    )
}

export default Growth