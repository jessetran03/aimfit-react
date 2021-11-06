import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faCheck,
  faChevronRight,
  faCog,
  faPlusCircle,
  faSpinner,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

export default function registerIcons() {
  library.add(
    faAngleDown,
    faAngleUp,
    faBars,
    faCheck,
    faChevronRight,
    faCog,
    faPlusCircle,
    faSpinner,
    faStar,
    farStar,
    faUser
  );
}
