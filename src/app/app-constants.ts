import addUsersMark from 'assets/add-users-mark.svg';
import usersListMark from 'assets/users-list-mark.svg';

export const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 1000000;
export const EIGHTEEN_YEARS_IN_MS = 565633905872;
export const DEFAULT_INPUT_MASK = '+38 (999) 999-99-99';
export const LANGUAGES = {
  en: 'English',
  fr: 'French',
  es: 'Spanish',
  ar: 'Arabic',
  cmn: 'Mandarin',
  ru: 'Russian',
  pt: 'Portuguese',
  de: 'German',
  ja: 'Japanese',
  hi: 'Hindi',
  ms: 'Malay',
  fa: 'Persian',
  sw: 'Swahili',
  ta: 'Tamil',
  it: 'Italian',
  nl: 'Dutch',
  bn: 'Bengali',
  tr: 'Turkish',
  vi: 'Vietnamese',
  pl: 'Polish',
  jv: 'Javanese',
  pa: 'Punjabi',
  th: 'Thai',
  ko: 'Korean',
};
export const SKILLS = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'Angular',
  'jQuery',
  'NodeJS',
  'Python',
  'PHP',
  'Ruby On Rails',
  'SQL',
  'BackboneJS',
  'Web Design',
  'Project management',
  'Git',
  'Docker',
  'AWS Lambda',
  'Firebase',
];

export const CHECKBOXES = [
  'Art',
  'Sport, fitness and staff like that',
  'I just want to play games, I’m not living in this life',
  'I’m a female... I’m doing nothing. Every day.',
  'Guitar, guitar and guitar again. I’m fall in love with it.',
  'WTF is “hobbies”???',
];

export const FORM_STAGES = [
  { id: 1, name: 'Account' },
  { id: 2, name: 'Profile' },
  { id: 3, name: 'Contacts' },
  { id: 4, name: 'Capabilities' },
];

export const HEADER_NAV = [
  { id: 1, text: 'List of users', path: '/', icon: usersListMark },
  { id: 2, text: 'Add new users', path: '/create-user', icon: addUsersMark },
];

export const USERS_LIST_HEADERS = [
  { id: 1, title: '', value: 'avatar' },
  { id: 2, title: 'name', value: 'name' },
  { id: 3, title: 'company', value: 'company' },
  { id: 4, title: 'contacts', value: 'contacts' },
  { id: 5, title: 'last update', value: 'lastUpdate' },
  { id: 6, title: '', value: 'actions' },
];
