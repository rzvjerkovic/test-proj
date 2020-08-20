import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContainerA } from '../ContainerA';
import { ContainerB } from '../ContainerB';

export function HomePage() {
  return (
    <>
      <ContainerA />
      <ContainerB />
    </>
  );
}
