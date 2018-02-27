import {BODY, NO_TOUCH} from './constants';

!('ontouchstart' in window) && BODY.classList.add(NO_TOUCH);
