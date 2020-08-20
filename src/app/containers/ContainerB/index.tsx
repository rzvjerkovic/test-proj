/**
 *
 * ContainerB
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectContainerB } from './selectors';
import { containerBSaga } from './saga';
import { selectContainerAValue } from '../ContainerA/selectors';
import { containerASaga } from '../ContainerA/saga';

interface Props {}

export const ContainerB = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: containerBSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const containerAValue = useSelector(selectContainerAValue);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>ContainerB</title>
        <meta name="description" content="Description of ContainerB" />
      </Helmet>
      <Div>
        {t('ContainerB')} : {containerAValue}
      </Div>
    </>
  );
});

const Div = styled.div``;
