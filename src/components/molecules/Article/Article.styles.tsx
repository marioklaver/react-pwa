import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  column-gap: 0.5rem;
  border-top: 1px solid rgba(68, 71, 70, 0.5);
  margin: 0 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageContainer = styled.div``;

export const DateTime = styled.div`
  font-family: 'Google Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: rgb(68, 71, 70);
`;
