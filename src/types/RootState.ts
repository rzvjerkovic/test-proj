import { ContainerAState } from 'app/containers/ContainerA/types';
import { ContainerBState } from 'app/containers/ContainerB/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  containerA?: ContainerAState;
  containerB?: ContainerBState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
