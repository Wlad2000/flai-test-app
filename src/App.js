/****************************************************************************
** APP main
** contain: NAV , CONTENT, RIGHT SECTIONS
**
**
****************************************************************************/
import React from 'react';
import styled from 'styled-components';
import HeaderContentBar from './bars/HeaderContentBar';
import ItemInfo from './components/ItemInfo';
import RelatedSounds from './components/RelatedSounds';
import SoundAudience from './components/SoundAudience';
import Recommendation from './components/Recommendation';
import Growth from './components/Growth';
import NavigationBar from './bars/NavigationBar';
import Advertising from './components/Advertising';


const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: #0D0D0E;

`;

const Navigation = styled.nav`
width: 90px;
  display: flex;
  position: fixed;
  background-color: #0D0D0E;
`;

const Content = styled.div`
  flex: 3;
  padding-left: 90px;
`;

const EmptyColumn = styled.div`
  flex: 1;
  background-color: #0D0D0E;
`;




// App Component
const App = () => {
  return (
      <Container>
        {/*--NAV SECTION--*/}
        <Navigation>
          <NavigationBar/>
        </Navigation>
        {/*--CONTENT SECTION--*/}
        <Content>
          <HeaderContentBar/>
          <ItemInfo/>
          <Growth/>
          <SoundAudience/>
          <RelatedSounds/>
          <Recommendation/>
        </Content>
        {/*--RIGHT SECTION--*/}
        <EmptyColumn >
         <Advertising/>
        </EmptyColumn>
      </Container>
  );
}

export default App;
