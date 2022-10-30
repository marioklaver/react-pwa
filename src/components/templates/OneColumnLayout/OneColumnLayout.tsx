import React, { FC, ReactElement } from 'react';
import { Container, ContentContainer, HeaderContainer, MainContentContainer } from './OneColumnLayout.styles';

interface Props {
  header: ReactElement;
  content: ReactElement;
}

export const OneColumnLayout: FC<Props> = ({ header, content }) => {
  return (
    <Container>
      <HeaderContainer>{header}</HeaderContainer>
      <ContentContainer>
        <MainContentContainer>{content}</MainContentContainer>
      </ContentContainer>
    </Container>
  );
};
