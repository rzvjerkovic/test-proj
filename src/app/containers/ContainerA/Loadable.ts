/**
 *
 * Asynchronously loads the component for ContainerA
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ContainerA = lazyLoad(
  () => import('./index'),
  module => module.ContainerA,
);
