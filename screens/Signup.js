import React, { useState } from 'react';
import { View } from 'react-native';

import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import {
  Colors,
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledTextInput,
  StyledButton,
  ButtonText,
  Line,
  MsgBox,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from './../components/styles';
import { StatusBar } from 'expo-status-bar';
import Formik from 'formik'; //error

const { brand, darkLight, primary } = Colors;

const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <SubTitle>Signup</SubTitle>

        <Formik
          initialValues={{ fullName: '', email: '', password: '', confirmPassword:''}}
          onSubmit={(values) => console.log(values)}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
            <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="Full Name"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="Email Address"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="********"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="********"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />


              <MsgBox>...</MsgBox>
              <Line />
              <StyledButton google={true} onPress={handleSubmit}>
                <Fontisto name="google" color={primary} size={25} />
                <ButtonText>Sign in with Google</ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtraText>Already have an account?</ExtraText>
                <TextLink>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({ label, icon, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {props.isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
