/****************************************************************************
** Item info 
** component for CONTENT section
**
**
****************************************************************************/
import React from 'react'
import styled from 'styled-components';
import photo from '../images/Mask.jpg'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 220px;
  background-color: #131314;
;
`;
const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
flex: 5;
padding: 2%;
padding-left: 5%;
`;
const ContainerSection = styled.div`
  display: flex;
width: 100%;
border-bottom: 1px solid #212122;
padding-bottom: 4.5%;
margin-bottom: 1%;
`;
const Section = styled.div`
    flex:1; 
    display: flex;
    flex-direction:column;
    row-gap: 6% ;
    
`;
const ContainerKeywords = styled.div`
  display: flex;
height: 100%;
  align-items: center;
`;
const ContainerRate = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  height: 100%;
  align-items: center;

`;
const Rate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
  background-color: ${(props) => props.primary ? " #00BE6E" : "#212122"};
    `;

const Row = styled.div`
display: flex;
align-items: center;
column-gap: ${(props) => props.columnGap ? props.columnGap : "4%"};
width: 100%;
  `;

const Teg = styled.div`
display: flex;
border-radius: 50px;
background-color:  ${(props) => props.backgroundColor ? props.backgroundColor : 'gray'};
width: ${(props) => props.width && props.width};
padding: ${(props) => props.padding ? props.padding : '0.3%'};
color: ${(props) => props.color ? props.color : 'gray'};
font-size: ${(props) => props.fontSize ? props.fontSize : '11px'};
align-items: center;
justify-content: center;
column-gap: 3%;
font-weight:  ${(props) => props.weight && props.weight};
`;
const Image = styled.img`
height: 80%;
border-radius: 50%;
margin-right: 3%;
`
const Text = styled.p`
height:  ${(props) => props.height && props.height};
display: flex;
color:  ${(props) => props.desc ? '#8E8F92' : props.color ? props.color : "white"};
font-size: ${(props) => props.fontSize ? props.fontSize : '18px'};
align-items: center;
column-gap: 3%;
font-weight:  ${(props) => props.weight && props.weight};
`;

const ItemInfo = () => {
    return (
        <Container>
            <ContainerInfo>
                <ContainerSection>
                    <Image src={photo} />
                    <Section>
                        <Text weight='600' fontSize='13px' desc>Official Artist
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" stroke-opacity="0.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.25 11.25H12V16.5H12.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.8125 9C12.4338 9 12.9375 8.49632 12.9375 7.875C12.9375 7.25368 12.4338 6.75 11.8125 6.75C11.1912 6.75 10.6875 7.25368 10.6875 7.875C10.6875 8.49632 11.1912 9 11.8125 9Z" fill="white" />
                            </svg>
                        </Text>

                        <Text weight='700' fontSize='18px' height='100%'>Khabane Lame</Text>
                        <Text weight='600' fontSize='14px' >Melodic sound</Text>

                        <Row>
                            <Text weight='600' fontSize='12px' desc>Type:</Text>
                            <Teg padding='1%' fontSize='12px' weight='700' backgroundColor='#202739' color='#6993FF' width='35%'> ORIGINAL</Teg>
                        </Row>
                        <Row columnGap='2%'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="8.75" fill="#1ED760" />
                                <path d="M13.9777 13.5143C13.8282 13.7515 13.5093 13.818 13.2602 13.6756C11.2968 12.5371 8.83523 12.2809 5.92515 12.9071C5.6461 12.964 5.36705 12.8027 5.30725 12.5371C5.24745 12.2714 5.41688 12.0058 5.69593 11.9488C8.8751 11.2562 11.6058 11.5503 13.7983 12.8312C14.0475 12.9735 14.1272 13.2771 13.9777 13.5143ZM14.9943 11.3511C14.8049 11.6452 14.4063 11.7306 14.0973 11.5598C11.8549 10.241 8.43659 9.86146 5.78562 10.63C5.43681 10.7249 5.07803 10.5446 4.97837 10.222C4.87871 9.88992 5.06807 9.54835 5.41688 9.45347C8.44656 8.58057 12.2137 8.99805 14.7949 10.5066C15.0839 10.6774 15.1836 11.0569 14.9943 11.3511ZM15.0839 9.09293C12.3931 7.57484 7.95822 7.43252 5.38698 8.17259C4.97837 8.29593 4.53986 8.07771 4.41031 7.67921C4.28075 7.2902 4.51993 6.87273 4.92854 6.74938C7.87849 5.89546 12.7818 6.06625 15.8713 7.81204C16.24 8.02078 16.3596 8.4762 16.1403 8.82726C15.9311 9.18781 15.4527 9.31115 15.0839 9.09293Z" fill="white" />
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="10" cy="10.0099" rx="7.97566" ry="7.98534" fill="url(#paint0_linear_1_556)" />
                                <path d="M8.22197 5.31913L13.4768 4.27475C13.7162 4.22716 13.9394 4.41036 13.9394 4.65449V12.7059C13.9394 13.3913 13.4601 13.9833 12.7897 14.126L12.3255 14.2248C11.5167 14.3968 10.755 13.7801 10.755 12.9533C10.755 12.3708 11.1476 11.8616 11.7108 11.7133L13.0266 11.3671C13.2052 11.3201 13.3296 11.1586 13.3296 10.9739V7.23579C13.3296 7.06394 13.1717 6.93547 13.0035 6.97045L8.62454 7.88058C8.48982 7.90858 8.39325 8.02728 8.39325 8.16488V13.7472C8.39325 14.4969 7.86868 15.1445 7.13525 15.3L6.81691 15.3676C5.98362 15.5443 5.19912 14.9088 5.19912 14.0569C5.19912 13.5141 5.56449 13.0392 6.08923 12.9L7.46649 12.5349C7.63623 12.4899 7.75443 12.3362 7.75443 12.1606V5.88875C7.75443 5.61165 7.95019 5.37315 8.22197 5.31913Z" fill="url(#paint1_radial_1_556)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 10C18.75 14.8325 14.8325 18.75 10 18.75C5.16751 18.75 1.25 14.8325 1.25 10C1.25 5.16751 5.16751 1.25 10 1.25C14.8325 1.25 18.75 5.16751 18.75 10ZM17.9757 10.0097C17.9757 14.4199 14.4048 17.995 10 17.995C5.59516 17.995 2.02434 14.4199 2.02434 10.0097C2.02434 5.5995 5.59516 2.02434 10 2.02434C14.4048 2.02434 17.9757 5.5995 17.9757 10.0097Z" fill="url(#paint2_radial_1_556)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_556" x1="10" y1="2.02454" x2="10" y2="17.9952" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" />
                                        <stop offset="1" stop-color="#DDE2E7" />
                                    </linearGradient>
                                    <radialGradient id="paint1_radial_1_556" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.19911 17.3368) rotate(-55.1325) scale(17.5068 13.748)">
                                        <stop stop-color="#7A66FB" />
                                        <stop offset="0.440198" stop-color="#52A2F4" />
                                        <stop offset="0.702" stop-color="#FC5D6D" />
                                        <stop offset="1" stop-color="#E85E7B" />
                                    </radialGradient>
                                    <radialGradient id="paint2_radial_1_556" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.19911 17.3368) rotate(-55.1325) scale(17.5068 13.748)">
                                        <stop stop-color="#7A66FB" />
                                        <stop offset="0.440198" stop-color="#52A2F4" />
                                        <stop offset="0.702" stop-color="#FC5D6D" />
                                        <stop offset="1" stop-color="#E85E7B" />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="8.75" fill="#212122" />
                                <path d="M6.69741 11.6585C6.76578 11.0924 6.99795 10.7755 7.43546 10.4506C8.06146 10.0106 8.84343 10.2595 8.84343 10.2595V8.78284C9.03353 8.77798 9.22371 8.78925 9.41174 8.81651V10.7168C9.41174 10.7168 8.63002 10.4679 8.00402 10.9081C7.56674 11.2328 7.3341 11.55 7.26597 12.1161C7.26383 12.4235 7.32152 12.8253 7.58716 13.1727C7.52148 13.139 7.45453 13.1006 7.38632 13.0576C6.80115 12.6646 6.69457 12.0751 6.69741 11.6585ZM12.6405 6.05254C12.2099 5.58066 12.047 5.10422 11.9882 4.76953H12.5299C12.5299 4.76953 12.4219 5.64709 13.2091 6.51009L13.22 6.5217C13.0078 6.38824 12.8132 6.23072 12.6405 6.05254ZM15.2501 7.39039V9.25245C15.2501 9.25245 14.5589 9.22537 14.0473 9.09523C13.333 8.91321 12.8739 8.63403 12.8739 8.63403C12.8739 8.63403 12.5567 8.43495 12.5311 8.42107V12.2662C12.5311 12.4803 12.4724 13.015 12.2937 13.461C12.0603 14.0443 11.7002 14.4273 11.634 14.5055C11.634 14.5055 11.196 15.0232 10.4233 15.3717C9.72676 15.6862 9.11524 15.6782 8.93245 15.6862C8.93245 15.6862 7.87535 15.728 6.92412 15.1098C6.71843 14.9736 6.52642 14.8193 6.35059 14.6489L6.35533 14.6523C7.3068 15.2705 8.36366 15.2286 8.36366 15.2286C8.54669 15.2206 9.15821 15.2286 9.85448 14.9142C10.6265 14.5656 11.0652 14.048 11.0652 14.048C11.1307 13.9697 11.4925 13.5868 11.7249 13.0032C11.9032 12.5575 11.9623 12.0226 11.9623 11.8085V7.96375C11.9879 7.97785 12.3048 8.17694 12.3048 8.17694C12.3048 8.17694 12.7642 8.45634 13.4785 8.63813C13.9903 8.76827 14.6814 8.79535 14.6814 8.79535V7.33624C14.9178 7.38925 15.1193 7.40358 15.2501 7.39039Z" fill="#EE1D52" />
                                <path d="M14.6816 7.33624V8.79489C14.6816 8.79489 13.9906 8.76782 13.4788 8.63768C12.7645 8.45566 12.3051 8.17648 12.3051 8.17648C12.3051 8.17648 11.9882 7.9774 11.9625 7.96329V11.8089C11.9625 12.023 11.9039 12.5579 11.7252 13.0036C11.4918 13.5872 11.1317 13.9702 11.0654 14.0484C11.0654 14.0484 10.6272 14.5661 9.85475 14.9146C9.15848 15.2291 8.54696 15.2211 8.36393 15.2291C8.36393 15.2291 7.30707 15.2709 6.3556 14.6527L6.35086 14.6493C6.2504 14.5521 6.15584 14.4494 6.06765 14.3417C5.76403 13.9715 5.57791 13.5338 5.53114 13.4089C5.53106 13.4083 5.53106 13.4078 5.53114 13.4073C5.45589 13.1902 5.29779 12.669 5.31939 12.1641C5.35761 11.2733 5.67097 10.7266 5.75382 10.5896C5.97324 10.2161 6.25862 9.88191 6.59727 9.60192C6.8961 9.36032 7.23482 9.16809 7.59953 9.03311C7.9938 8.87463 8.41599 8.78969 8.84346 8.78284V10.2595C8.84346 10.2595 8.0615 10.0115 7.43573 10.4506C6.99822 10.7755 6.76605 11.0924 6.69768 11.6585C6.69484 12.0751 6.80142 12.6646 7.38612 13.0578C7.45433 13.101 7.52127 13.1394 7.58695 13.1729C7.6891 13.3057 7.81342 13.4214 7.95491 13.5153C8.52607 13.8769 9.00465 13.9021 9.61665 13.6673C10.0247 13.5103 10.3319 13.1565 10.4743 12.7645C10.5638 12.5197 10.5627 12.2733 10.5627 12.0185V4.76953H11.987C12.0459 5.10422 12.2087 5.58066 12.6393 6.05254C12.8121 6.23072 13.0067 6.38824 13.2188 6.5217C13.2815 6.58654 13.602 6.90712 14.0134 7.10393C14.2261 7.20566 14.4503 7.28361 14.6816 7.33624Z" fill="white" />
                                <path d="M4.96387 12.957V12.9582L4.99921 13.054C4.99515 13.0428 4.98202 13.0089 4.96387 12.957Z" fill="#69C9D0" />
                                <path d="M7.59936 9.03385C7.23465 9.16882 6.89593 9.36105 6.59709 9.60266C6.25834 9.88327 5.97302 10.2182 5.75388 10.5924C5.67103 10.7289 5.35767 11.2761 5.31945 12.1669C5.29785 12.6717 5.45595 13.193 5.53121 13.4101C5.53112 13.4106 5.53112 13.4111 5.53121 13.4116C5.57868 13.5354 5.76409 13.9732 6.06771 14.3445C6.15591 14.4521 6.25046 14.5548 6.35092 14.6521C6.02906 14.4388 5.74202 14.1808 5.49916 13.8867C5.19815 13.5197 5.01251 13.0865 4.96408 12.9586C4.96402 12.9577 4.96402 12.9568 4.96408 12.9559V12.9543C4.88859 12.7375 4.73001 12.216 4.75209 11.7104C4.79031 10.8197 5.10366 10.2729 5.18651 10.136C5.4056 9.76171 5.69092 9.42681 6.02973 9.14624C6.3285 8.90456 6.66724 8.71232 7.03199 8.57743C7.25951 8.48696 7.49652 8.42021 7.73894 8.37835C8.10428 8.31722 8.47741 8.31193 8.84447 8.36265V8.78357C8.4166 8.79028 7.99399 8.87522 7.59936 9.03385Z" fill="#69C9D0" />
                                <path d="M11.988 4.77028H10.5636V12.0194C10.5636 12.2743 10.5636 12.52 10.4753 12.7655C10.3315 13.1573 10.0255 13.5111 9.61762 13.6681C9.00539 13.9038 8.52681 13.8776 7.95588 13.5161C7.81415 13.4226 7.68951 13.3073 7.58698 13.1748C8.07339 13.4235 8.50876 13.4192 9.04812 13.2117C9.45572 13.0547 9.76219 12.7009 9.90557 12.3088C9.99531 12.064 9.99412 11.8176 9.99412 11.563V4.3125H11.9609C11.9609 4.3125 11.9388 4.4927 11.988 4.77028ZM14.6814 6.93358V7.33698C14.4505 7.28427 14.2267 7.20633 14.0143 7.10468C13.6029 6.90787 13.2825 6.58729 13.2198 6.52245C13.2925 6.56821 13.368 6.60984 13.4458 6.64713C13.946 6.88648 14.4386 6.95793 14.6814 6.93358Z" fill="#69C9D0" />
                            </svg>
                        </Row>

                    </Section>
                    <Section>
                        <Text weight='600' fontSize='14px'>🔥🔥🔥 Trending</Text>
                        <Row>
                            <Text desc weight='600' fontSize='14px'>Duration: </Text>
                            <Text weight='600' fontSize='14px'>00:45</Text>
                        </Row>
                        <Row>
                            <Text desc weight='600' fontSize='14px'>Birate: </Text>
                            <Text weight='600' fontSize='14px'>
                                ==
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_528)">
                                        <path d="M7.99935 1.33203C8.8834 1.33203 9.73125 1.68322 10.3564 2.30834C10.9815 2.93346 11.3327 3.78131 11.3327 4.66536V6.66536C11.8631 6.66536 12.3718 6.87608 12.7469 7.25115C13.122 7.62622 13.3327 8.13493 13.3327 8.66536V12.6654C13.3327 13.1958 13.122 13.7045 12.7469 14.0796C12.3718 14.4546 11.8631 14.6654 11.3327 14.6654H4.66602C4.13558 14.6654 3.62687 14.4546 3.2518 14.0796C2.87673 13.7045 2.66602 13.1958 2.66602 12.6654V8.66536C2.66602 8.13493 2.87673 7.62622 3.2518 7.25115C3.62687 6.87608 4.13558 6.66536 4.66602 6.66536V4.66536C4.66602 3.78131 5.0172 2.93346 5.64233 2.30834C6.26745 1.68322 7.11529 1.33203 7.99935 1.33203ZM7.99935 9.33203C7.66296 9.33192 7.33897 9.45897 7.09232 9.6877C6.84566 9.91642 6.69458 10.2299 6.66935 10.5654L6.66602 10.6654C6.66602 10.9291 6.74421 11.1869 6.89072 11.4061C7.03723 11.6254 7.24547 11.7963 7.4891 11.8972C7.73274 11.9981 8.00083 12.0245 8.25947 11.9731C8.51811 11.9216 8.75569 11.7946 8.94216 11.6082C9.12863 11.4217 9.25562 11.1841 9.30706 10.9255C9.35851 10.6668 9.3321 10.3988 9.23119 10.1551C9.13027 9.91148 8.95937 9.70325 8.74011 9.55674C8.52084 9.41023 8.26306 9.33203 7.99935 9.33203ZM7.99935 2.66536C7.46892 2.66536 6.96021 2.87608 6.58513 3.25115C6.21006 3.62622 5.99935 4.13493 5.99935 4.66536V6.66536H9.99935V4.66536C9.99935 4.13493 9.78864 3.62622 9.41356 3.25115C9.03849 2.87608 8.52978 2.66536 7.99935 2.66536Z" fill="#D1FD0A" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_528">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                ==
                            </Text>
                        </Row>

                    </Section>
                    <Section>
                        <Row>
                            <Text desc weight='600' fontSize='14px'>Country: </Text>
                            <Text weight='600' fontSize='14px'>Canada
                                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="21" height="15" fill="white" />
                                    <rect x="16.1538" width="4.84615" height="15" fill="#D52B1E" />
                                    <rect width="4.84615" height="15" fill="#D52B1E" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2981 12.7778H10.7019L10.6346 10.4167L10.9039 10.2778L12.9237 10.6944L12.6539 9.86111L15.0769 7.77778L14.4039 7.5L14.9423 5.83333L13.4615 6.25L13.1923 5.41667L12.1154 6.66667H11.8462L12.3846 3.75L11.5769 4.30556L11.4423 4.31193L10.5 2.5L9.5577 4.30556H9.42308L8.61539 3.75L9.15385 6.66667H8.88462L7.8077 5.41667L7.53847 6.25L6.0577 5.83333L6.59616 7.5L5.92308 7.77778L8.34673 9.86111L8.07693 10.6944L10.0962 10.2778L10.3654 10.4167L10.2981 12.7778Z" fill="#D52B1E" />
                                </svg>
                            </Text>
                        </Row>
                        <Row>
                            <Text desc weight='600' fontSize='14px'>Place in the country: </Text>
                            <Text weight='600' fontSize='14px'>05</Text>
                        </Row>
                        <Row>
                            <Text desc weight='600' fontSize='14px'>Place in the world: </Text>
                            <Text weight='600' fontSize='14px'>43</Text>
                        </Row>
                        <Teg padding='2%' weight='700' backgroundColor='#4a4a4b' color=' #FFFFFF' width='55%'> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.584 12.7869L8.45173 1.02688C8.41225 0.914884 8.30641 0.839844 8.18769 0.839844H5.81245C5.69373 0.839844 5.58761 0.914884 5.54841 1.02688L1.41617 12.7869C1.38621 12.8726 1.39937 12.9675 1.45173 13.0417C1.50409 13.1159 1.58921 13.1598 1.67993 13.1598H3.46493C3.58365 13.1598 3.68977 13.0848 3.72897 12.9725L4.74565 10.0798H9.25449L10.2709 12.9725C10.3104 13.0848 10.4162 13.1598 10.5349 13.1598H12.3199C12.4107 13.1598 12.4958 13.1159 12.5484 13.0417C12.6011 12.9675 12.6142 12.8728 12.584 12.7869ZM6.91005 3.91984H7.08953L8.56541 8.11984H5.43417L6.91005 3.91984Z" fill="white" />
                        </svg>
                            Sound to text
                        </Teg>
                    </Section>
                </ContainerSection>
                <ContainerKeywords>
                    <Row columnGap='1.5%'>
                        <Text desc weight='600' fontSize='14px'>Keywords:</Text>
                        <Teg weight='600' backgroundColor='#212122' color=' #FFFFFF' width='18%'> Whispering breeze</Teg>
                        <Teg weight='600' backgroundColor='#212122' color=' #FFFFFF' width='16%'> Wandering soul</Teg>
                        <Teg weight='600' backgroundColor='#212122' color=' #FFFFFF' width='16%'> Crimson dawn</Teg>
                        <Teg weight='600' backgroundColor='#212122' color=' #FFFFFF' width='16%'> Echoes of silence</Teg>
                    </Row>
                </ContainerKeywords>
            </ContainerInfo >
            <ContainerRate>
                <Rate>
                    <Text weight='600' fontSize='13px' desc>🙋‍♂️ Videos</Text>
                    <Text weight='700' fontSize='35px'>1.8M</Text>
                    <Text weight='700' fontSize='13px' color='#D1FD0A'>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.666992 1.6866V10.3174C0.666992 10.9749 1.39283 11.3733 1.94783 11.0208L8.72866 6.70577C9.24366 6.37827 9.24366 5.62743 8.72866 5.29993L1.94783 0.983266C1.39283 0.629933 0.666992 1.0291 0.666992 1.6866Z" fill="#D1FD0A" />
                        </svg>
                        WatchVideos</Text>
                </Rate>
                <Rate primary>
                    <Text weight='600' fontSize='12px' color='#AAFFDB'>Daily Growth</Text>
                    <Text weight='700' fontSize='35px'>+100k</Text>
                </Rate>
            </ContainerRate>
        </Container >
    )
}

export default ItemInfo