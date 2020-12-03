import bobImage from '../images/users-icons-side-bar/bob.png';
import jordanImage from '../images/users-icons-side-bar/jordan.png';
import melisaImage from '../images/users-icons-side-bar/melisa.png';
import jesicaImage from '../images/users-icons-side-bar/jesica.png';
import sarahImage from '../images/users-icons-side-bar/sarah.png';
import { statistics } from './statistic';

export const initialUsers = [
  {
    name: 'Bob',
    surname: 'Wazowsky',
    image: bobImage,
    role: 'user',
    id: 1,
    newInvitations: 0,
  },
  {
    name: 'Jordan',
    surname: 'Jackson',
    image: jordanImage,
    role: 'Administrator',
    id: 2,
    newInvitations: 54,
    statistics,
  },
  {
    name: 'Melisa',
    surname: 'Simpson',
    image: melisaImage,
    role: 'user',
    id: 3,
    newInvitations: 0,
  },
  {
    name: 'Jesica',
    surname: 'Alba',
    image: jesicaImage,
    role: 'user',
    id: 4,
    newInvitations: 0,
  },
  {
    name: 'Sarah',
    surname: 'Conor',
    image: sarahImage,
    role: 'user',
    id: 5,
    newInvitations: 0,
  },
];

export const initialUser = {
  name: 'Jordan',
  surname: 'Jackson',
  image: jordanImage,
  role: 'Administrator',
  id: 2,
  newInvitations: 54,
  statistics,
};
