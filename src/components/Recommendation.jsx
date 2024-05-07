/****************************************************************************
** Recommendation
** component for CONTENT section
** contain list
**
****************************************************************************/
import React from 'react'
import styled from 'styled-components';
import List from '../items/List';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 650px;
  background-color: #0D0D0E;
  flex-direction: column;
`
const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
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
    width: 100%;
  flex-direction: column;
 // height: 80%;
`
const TabSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height:100px
`
const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 4%;
  border-bottom: 1px solid #212122;
  margin-bottom: 2%;
`
const Tab = styled.div`
font-weight: 600;
font-size: 14px;
  display: flex;
  align-items: center;
  column-gap: 4%;
  height: 24px;
 color:  ${(props) => props.active ? '#D1FD0A' : '#8E8F92'};
border-bottom:  ${(props) => props.active && '1px solid #D1FD0A'};
`
const TabContent = styled.div`
position: relative;
column-gap: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  background: radial-gradient(circle, #212122 2%,  #0D0D0E 100%);
`
const Text = styled.p`
position: relative;
width:  ${(props) => props.width && props.width};
height:  ${(props) => props.height && props.height};;
display: flex;
color:  ${(props) => props.color ? props.color : "white"};
font-size: ${(props) => props.fontSize ? props.fontSize : '18px'};
align-items: center;
column-gap: 0.5%;
font-weight:  ${(props) => props.weight && props.weight};
background:  ${(props) => props.background && props.background};
padding:  ${(props) => props.padding && props.padding};
justify-content:  ${(props) => props.justifyContent && props.justifyContent};
z-index: 2;
`;
const ListSection = styled.div`
  display: flex;
 // align-items: center;
  flex-direction: column;
  width: 100%;
  row-gap: 4px;
  margin-top: 4%;
  
`


const Recommendation = () => {
    return (
        <Container>
            <ContainerTitle>
                <Text width='100%' weight='700' fontSize='20px'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1072)">
                            <path d="M17 3.34001C18.5083 4.21087 19.7629 5.46054 20.6398 6.96531C21.5167 8.47009 21.9854 10.1778 21.9994 11.9194C22.0135 13.6609 21.5725 15.376 20.72 16.8947C19.8676 18.4135 18.6332 19.6832 17.1392 20.5783C15.6452 21.4734 13.9434 21.9628 12.2021 21.9981C10.4608 22.0333 8.74055 21.6132 7.21155 20.7793C5.68256 19.9453 4.39787 18.7265 3.48467 17.2435C2.57146 15.7605 2.06141 14.0647 2.005 12.324L2 12L2.005 11.676C2.061 9.94901 2.56355 8.26598 3.46364 6.79101C4.36373 5.31604 5.63065 4.09947 7.14089 3.2599C8.65113 2.42033 10.3531 1.98641 12.081 2.00045C13.8089 2.01449 15.5036 2.47601 17 3.34001Z" fill="#D1FD0A" />
                            <g clip-path="url(#clip1_1_1072)">
                                <path d="M13.75 8.5L12.5 11.5L9.5 12.75L12.5 14L13.75 17L15 14L18 12.75L15 11.5L13.75 8.5ZM8.0625 9.9375L8.75 12L9.4375 9.9375L11.5 9.25L9.4375 8.5625L8.75 6.5L8.0625 8.5625L6 9.25L8.0625 9.9375ZM9.1875 15.3125L8.75 14L8.3125 15.3125L7 15.75L8.3125 16.1875L8.75 17.5L9.1875 16.1875L10.5 15.75L9.1875 15.3125Z" fill="black" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1072">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                            <clipPath id="clip1_1_1072">
                                <rect width="12" height="12" fill="white" transform="translate(6 6)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span style={{ color: '#D1FD0A' }}>Recommendations</span> from AI
                </Text>
            </ContainerTitle>
            <ContainerInfo>
                <TabSection>
                    <Row>
                        <Tab active>Base</Tab>
                        <Tab>
                            Advanced
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_1153)">
                                    <path d="M7.99935 1.33203C8.8834 1.33203 9.73125 1.68322 10.3564 2.30834C10.9815 2.93346 11.3327 3.78131 11.3327 4.66536V6.66536C11.8631 6.66536 12.3718 6.87608 12.7469 7.25115C13.122 7.62622 13.3327 8.13493 13.3327 8.66536V12.6654C13.3327 13.1958 13.122 13.7045 12.7469 14.0796C12.3718 14.4546 11.8631 14.6654 11.3327 14.6654H4.66602C4.13558 14.6654 3.62687 14.4546 3.2518 14.0796C2.87673 13.7045 2.66602 13.1958 2.66602 12.6654V8.66536C2.66602 8.13493 2.87673 7.62622 3.2518 7.25115C3.62687 6.87608 4.13558 6.66536 4.66602 6.66536V4.66536C4.66602 3.78131 5.0172 2.93346 5.64233 2.30834C6.26745 1.68322 7.11529 1.33203 7.99935 1.33203ZM7.99935 9.33203C7.66296 9.33192 7.33897 9.45897 7.09232 9.6877C6.84566 9.91642 6.69458 10.2299 6.66935 10.5654L6.66602 10.6654C6.66602 10.9291 6.74421 11.1869 6.89072 11.4061C7.03723 11.6254 7.24547 11.7963 7.4891 11.8972C7.73274 11.9981 8.00083 12.0245 8.25947 11.9731C8.51811 11.9216 8.75569 11.7946 8.94216 11.6082C9.12863 11.4217 9.25562 11.1841 9.30706 10.9255C9.35851 10.6668 9.3321 10.3988 9.23119 10.1551C9.13027 9.91148 8.95937 9.70325 8.74011 9.55674C8.52084 9.41023 8.26306 9.33203 7.99935 9.33203ZM7.99935 2.66536C7.46892 2.66536 6.96021 2.87608 6.58513 3.25115C6.21006 3.62622 5.99935 4.13493 5.99935 4.66536V6.66536H9.99935V4.66536C9.99935 4.13493 9.78864 3.62622 9.41356 3.25115C9.03849 2.87608 8.52978 2.66536 7.99935 2.66536Z" fill="#D1FD0A" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1153">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Tab>
                    </Row>
                    <TabContent>
                        <Text width='100%' weight='600' fontSize='15px' justifyContent='center'>
                            😥 you followed<span style={{ color: '#D1FD0A' }}>2/10</span> recommendations
                        </Text>
                        <div style={{ zIndex: 1, position: 'absolute', width: '170px', height: '100%', left: '30%', background: 'radial-gradient(circle, #cd2f21a5 1%, transparent 60%)' }}></div>
                    </TabContent>
                </TabSection>
                <ListSection>
                    <List active text='02:15 Recommendations for your song' />
                    <List list text='Duration for segments of your sound promo' />
                    <List listItem active text='Duration for segments of your sound promo' />
                    <List listItem text='Duration for segments of your sound promo' />
                    <List dev text='Release day' />
                    <List active text='Promotion' />
                    <List dev text='Duet' />
                    <List dev text='The best location for the potential of your sound' />

                </ListSection>
            </ContainerInfo >
        </Container >
    )
}

export default Recommendation
