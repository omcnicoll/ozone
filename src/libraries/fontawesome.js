// More info here:https://scotch.io/tutorials/using-font-awesome-5-with-react
// And here: https://alligator.io/react/font-awesome/

// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

// import regular icons
import { faCoffee, faKeyboard } from '@fortawesome/free-solid-svg-icons';

// import solid icons
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

// import brand icons
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faCoffee,
  faKeyboard,
  faBicycle,
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter
  // more icons go here
);
