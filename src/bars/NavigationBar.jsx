/****************************************************************************
** NAV BAR
** component for NAV section
**
**
****************************************************************************/
import React from 'react'
import styled from 'styled-components';
import picture from '../images/Group 6.png'

const Container = styled.div`
  display: flex;
width: 100%;
  height: 100vh;
  padding-top: 24%;
  padding-bottom: 74%;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#0d0d0e,#080809,#131314,#202027,#32324db7,#3a2038af,#0b0b1c);
`;
const ContainerInfo = styled.div`
  display: flex;
  height: 20%;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.img`
border-radius: 50%;
`

const NavigationBar = () => {
    return (
        <Container>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="25" fill="#212122" />
                <path d="M15 18V20H35V18H15ZM15 24V26H35V24H15ZM15 30V32H35V30H15Z" fill="white" />
            </svg>

            <ContainerInfo>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9998 2.60156C12.0421 2.60156 11.2664 3.37723 11.2664 4.3349V4.56172C8.27796 5.33269 6.06644 8.03907 6.06644 11.2682V13.3435C6.06644 14.7215 5.78344 16.0756 5.25564 17.3349H20.7439C20.2161 16.0765 19.9331 14.7215 19.9331 13.3435V11.2682C19.9331 8.03907 17.7216 5.33269 14.7331 4.56172V4.3349C14.7331 3.37723 13.9574 2.60156 12.9998 2.60156ZM4.33311 19.0682C4.21827 19.0666 4.10425 19.0878 3.99767 19.1306C3.8911 19.1735 3.7941 19.2371 3.71232 19.3177C3.63053 19.3983 3.56558 19.4944 3.52126 19.6004C3.47693 19.7063 3.4541 19.82 3.4541 19.9349C3.4541 20.0497 3.47693 20.1635 3.52126 20.2694C3.56558 20.3754 3.63053 20.4715 3.71232 20.5521C3.7941 20.6327 3.8911 20.6963 3.99767 20.7391C4.10425 20.782 4.21827 20.8032 4.33311 20.8016H10.5521C10.4525 21.0797 10.4009 21.3728 10.3998 21.6682C10.3998 22.3578 10.6737 23.0191 11.1613 23.5067C11.6489 23.9943 12.3102 24.2682 12.9998 24.2682C13.6893 24.2682 14.3507 23.9943 14.8383 23.5067C15.3258 23.0191 15.5998 22.3578 15.5998 21.6682C15.5991 21.3729 15.5482 21.0798 15.4491 20.8016H21.6664C21.7813 20.8032 21.8953 20.782 22.0019 20.7391C22.1085 20.6963 22.2055 20.6327 22.2872 20.5521C22.369 20.4715 22.434 20.3754 22.4783 20.2694C22.5226 20.1635 22.5455 20.0497 22.5455 19.9349C22.5455 19.82 22.5226 19.7063 22.4783 19.6004C22.434 19.4944 22.369 19.3983 22.2872 19.3177C22.2055 19.2371 22.1085 19.1735 22.0019 19.1306C21.8953 19.0878 21.7813 19.0666 21.6664 19.0682H12.9998H4.33311Z" fill="#8D9095" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.4905 2C10.0115 2 9.60208 2.33859 9.51008 2.80859L9.17609 4.52344C8.35533 4.8338 7.59641 5.2674 6.93 5.81445L5.28547 5.24805C4.83247 5.09205 4.33406 5.27936 4.09406 5.69336L2.58625 8.30664C2.34725 8.72164 2.43423 9.2485 2.79523 9.5625L4.11359 10.709C4.04503 11.1303 4.00031 11.5593 4.00031 12C4.00031 12.4407 4.04503 12.8697 4.11359 13.291L2.79523 14.4375C2.43423 14.7515 2.34725 15.2784 2.58625 15.6934L4.09406 18.3066C4.33306 18.7216 4.83247 18.9089 5.28547 18.7539L6.93 18.1875C7.59619 18.7342 8.3557 19.1663 9.17609 19.4766L9.51008 21.1914C9.60208 21.6614 10.0115 22 10.4905 22H13.5101C13.9891 22 14.3985 21.6614 14.4905 21.1914L14.8245 19.4766C15.6453 19.1662 16.4042 18.7326 17.0706 18.1855L18.7152 18.752C19.1682 18.908 19.6666 18.7216 19.9066 18.3066L21.4144 15.6914C21.6534 15.2764 21.5664 14.7515 21.2054 14.4375L19.887 13.291C19.9556 12.8697 20.0003 12.4407 20.0003 12C20.0003 11.5593 19.9556 11.1303 19.887 10.709L21.2054 9.5625C21.5664 9.2485 21.6534 8.72164 21.4144 8.30664L19.9066 5.69336C19.6676 5.27836 19.1682 5.09109 18.7152 5.24609L17.0706 5.8125C16.4044 5.26579 15.6449 4.83366 14.8245 4.52344L14.4905 2.80859C14.3985 2.33859 13.9891 2 13.5101 2H10.4905ZM12.0003 8C14.2093 8 16.0003 9.791 16.0003 12C16.0003 14.209 14.2093 16 12.0003 16C9.79131 16 8.00031 14.209 8.00031 12C8.00031 9.791 9.79131 8 12.0003 8Z" fill="#8D9095" />
                </svg>

                <Image src={picture} />
            </ContainerInfo>
        </Container>
    )
}

export default NavigationBar