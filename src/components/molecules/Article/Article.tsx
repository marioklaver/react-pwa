import React, { FC } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Typography } from '@components/atoms';
import { Container, ContentContainer, DateTime, ImageContainer } from './Article.styles';

export interface NewsItem {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface Props {
  newsItem: NewsItem;
  small?: boolean;
}

export const Article: FC<Props> = ({ newsItem, small = false }) => {
  const { title, publishedAt, urlToImage } = newsItem;
  return (
    <Container>
      <ContentContainer>
        <Typography variant={small ? 'h5' : 'h4'}>{title}</Typography>
        <DateTime>{formatDistanceToNow(new Date(publishedAt), { addSuffix: true })}</DateTime>
      </ContentContainer>
      <ImageContainer>
        <img alt={title} src={urlToImage} width={small ? 111 : 200} height={111} style={{ objectFit: 'cover' }} />
      </ImageContainer>
    </Container>
  );
};
