/**
 *
 * ContainerA
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectContainerA } from './selectors';
import { containerASaga } from './saga';

interface Props {}

export const ContainerA = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: containerASaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const containerA = useSelector(selectContainerA);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch({ type: actions.increaseCounterStart.type });
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>ContainerA</title>
        <meta name="description" content="Description of ContainerA" />
      </Helmet>
      <Div>{t('ContainerA')}</Div>
    </>
  );
});

const Div = styled.div``;
