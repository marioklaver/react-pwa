import React, { FC, ReactElement } from 'react';
import {
  Container,
  ContentContainer,
  HeaderContainer,
  MainContentContainer,
  SideContentContainer,
} from './TwoColumnLayout.styles';

interface Props {
  header: ReactElement;
  mainContent: ReactElement;
  sideContent: ReactElement;
}

export const TwoColumnLayout: FC<Props> = ({ header, mainContent, sideContent }) => {
  return (
    <Container>
      <HeaderContainer>{header}</HeaderContainer>
      <ContentContainer>
        <MainContentContainer>{mainContent}</MainContentContainer>
        <SideContentContainer>{sideContent}</SideContentContainer>
      </ContentContainer>
    </Container>
  );
};
