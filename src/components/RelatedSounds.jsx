/****************************************************************************
** RelatedSounds
** component for CONTENT section
** 
**
****************************************************************************/
import React from 'react'
import styled from 'styled-components';
import picture from '../images/Object 1.png'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  background-color: #0D0D0E;
  flex-direction: column;
`
const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  height: 35%;
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
  width: 100%;
  height: 65%;
  background-color:  #212122;
`
const Text = styled.p`
width:  ${(props) => props.width && props.width};
height:  ${(props) => props.height && props.height};
display: flex;
color:  ${(props) => props.desc ? " #8E8F92 " : "white"};
font-size: ${(props) => props.fontSize ? props.fontSize : '18px'};
align-items: center;
column-gap: 0.5%;
font-weight:  ${(props) => props.weight && props.weight};
 `;
const Teg = styled.div`
margin-left: 2%;
display: flex;
border-radius: 50px;
background-color:  ${(props) => props.backgroundColor ? props.backgroundColor : 'gray'};
width: ${(props) => props.width && props.width};
padding: ${(props) => props.padding ? props.padding : '0.3%'};
color: ${(props) => props.color ? props.color : 'gray'};
font-size: ${(props) => props.fontSize ? props.fontSize : '13px'};
align-items: center;
justify-content: center;
column-gap: 3%;
font-weight:  ${(props) => props.weight && props.weight};
`;
const Image = styled.img`
width: 60px;
//height: 33px;
`

const RelatedSounds = () => {
    return (
        <Container>
            <ContainerTitle>
                <Text width='100%' weight='700' fontSize='20px'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_803)">
                            <path d="M17 3.34C18.5083 4.21085 19.7629 5.46053 20.6398 6.9653C21.5167 8.47007 21.9854 10.1778 21.9994 11.9193C22.0135 13.6609 21.5725 15.376 20.72 16.8947C19.8676 18.4134 18.6332 19.6832 17.1392 20.5783C15.6452 21.4734 13.9434 21.9628 12.2021 21.9981C10.4608 22.0333 8.74055 21.6132 7.21155 20.7792C5.68256 19.9453 4.39787 18.7265 3.48467 17.2435C2.57146 15.7605 2.06141 14.0647 2.005 12.324L2 12L2.005 11.676C2.061 9.94899 2.56355 8.26596 3.46364 6.79099C4.36373 5.31602 5.63065 4.09945 7.14089 3.25988C8.65113 2.42031 10.3531 1.9864 12.081 2.00044C13.8089 2.01448 15.5036 2.476 17 3.34Z" fill="#D1FD0A" />
                            <path d="M15.36 6.12109C14.7147 6.12106 14.0691 6.36702 13.5777 6.85828L12.1777 8.25828C11.48 8.95604 11.2806 9.96364 11.574 10.8417L12.5797 9.83602C12.6217 9.54846 12.7487 9.27108 12.9696 9.05016L14.3696 7.65016C14.6426 7.37744 15.0016 7.24055 15.36 7.24055C15.7184 7.24055 16.0771 7.37716 16.3499 7.65016C16.8956 8.19616 16.8956 9.08412 16.3499 9.62984L14.9499 11.0298C14.7289 11.2508 14.4518 11.3775 14.164 11.4198L13.1577 12.426C13.4176 12.5128 13.6881 12.5589 13.9595 12.5589C14.6049 12.5589 15.2503 12.3131 15.7417 11.8217L17.1417 10.4217C18.1245 9.4392 18.1242 7.8408 17.1417 6.85828C16.6503 6.36716 16.0053 6.12113 15.36 6.12109ZM13.6691 9.75453C13.5236 9.75887 13.3855 9.81967 13.2841 9.92406L9.92407 13.2841C9.87032 13.3357 9.82742 13.3975 9.79786 13.4659C9.7683 13.5343 9.75268 13.6079 9.75192 13.6824C9.75116 13.7569 9.76528 13.8308 9.79344 13.8997C9.8216 13.9687 9.86324 14.0314 9.91593 14.0841C9.96861 14.1368 10.0313 14.1784 10.1003 14.2066C10.1692 14.2347 10.2431 14.2488 10.3176 14.2481C10.3922 14.2473 10.4658 14.2317 10.5341 14.2022C10.6025 14.1726 10.6643 14.1297 10.7159 14.0759L14.0759 10.7159C14.1569 10.6373 14.2121 10.536 14.2345 10.4254C14.2569 10.3148 14.2453 10.2 14.2013 10.0961C14.1574 9.99214 14.083 9.90392 13.988 9.84298C13.8931 9.78203 13.7819 9.7512 13.6691 9.75453ZM10.1658 11.4466C9.47921 11.4116 8.78182 11.6544 8.25829 12.1777L6.85829 13.5777C5.87577 14.5603 5.87577 16.1592 6.85829 17.1417C7.34969 17.6328 7.99489 17.8784 8.64001 17.8784C9.28513 17.8784 9.93033 17.6326 10.4217 17.1412L11.8217 15.7412C12.5195 15.0434 12.7195 14.0358 12.426 13.1577L11.4198 14.164C11.3778 14.4515 11.2508 14.7289 11.0299 14.9498L9.62985 16.3498C9.08413 16.8958 8.19588 16.8958 7.65016 16.3498C7.10444 15.8038 7.10444 14.9159 7.65016 14.3702L9.05016 12.9702C9.27108 12.7492 9.54846 12.622 9.83602 12.5797L10.8417 11.574C10.6222 11.5006 10.3946 11.4582 10.1658 11.4466Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_803">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span style={{ color: '#D1FD0A' }}>Related</span>Sounds
                </Text>
            </ContainerTitle>
            <ContainerInfo>
                <Image src={picture} />
                <Text weight='600' fontSize='12px'>
                    Notify me when these features start working</Text>
                <Teg weight='700' backgroundColor='#D1FD0A' color=' #0D0D0E' width='10%'>
                    Notify Me
                </Teg>
            </ContainerInfo>
        </Container >
    )
}

export default RelatedSounds