import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
from {
   transform: scale(.98);
   opacity: 0;
 }

 to {
   transform: scale(1);
   opacity: 1;
 }
`

export const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.99);
    opacity: 1;
  }
`

export const pulse = keyframes`
  from {
    stroke-width: 3px;
    stroke-opacity: 1;
    fill-opacity: 1;
    transform: scale(0.5);
  }
  to {
    stroke-width: 0;
    stroke-opacity: 0;
    fill-opacity: 0;
    transform: scale(2);
  }
}
`
