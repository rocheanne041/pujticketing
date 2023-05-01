import React from 'react';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledButton,
  StyledFormArea,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar
} from './../components/styles';
import { StatusBar } from 'expo-status-bar';

const Welcome = () => {
  return (
    <>
    <StatusBar style="light" />
    <InnerContainer>
      <WelcomeImage resizeMode="cover" source={require('./../assets/BusStop3.png')} />

      <WelcomeContainer>
        <PageTitle welcome={true}>Welcome!</PageTitle>
        <SubTitle welcome={true}>Your name</SubTitle>
    
        <StyledFormArea>
          <Avatar resizeMode="cover" source={require('./../assets/buslogo.png')} />

          <Line />
          <StyledButton>
            <ButtonText>Logout</ButtonText>
          </StyledButton>
        </StyledFormArea>
      </WelcomeContainer>
    </InnerContainer>
    </>
);
};

export default Welcome;