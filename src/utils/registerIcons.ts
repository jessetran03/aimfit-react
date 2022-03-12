import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faAngleUp,
  faArrowLeft,
  faBars,
  faCheck,
  faChevronRight,
  faCog,
  faEllipsisV,
  faMinusCircle,
  faPlusCircle,
  faSpinner,
  faStar,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

export default function registerIcons() {
  library.add(
    faAngleDown,
    faAngleUp,
    faArrowLeft,
    faBars,
    faCheck,
    faChevronRight,
    faCog,
    faEllipsisV,
    faMinusCircle,
    faPlusCircle,
    faSpinner,
    faStar,
    farStar,
    faTimes,
    faUser,
  );
}
