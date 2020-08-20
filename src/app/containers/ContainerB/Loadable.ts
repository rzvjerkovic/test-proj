/**
 *
 * Asynchronously loads the component for ContainerB
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ContainerB = lazyLoad(
  () => import('./index'),
  module => module.ContainerB,
);
