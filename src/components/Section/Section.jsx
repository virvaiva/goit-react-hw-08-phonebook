import React from 'react';

import { Container, Title } from './Section.style';

export const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
);
