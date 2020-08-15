const students = [
  {
    id: 'student01',
    firstName: 'Austin',
    lastName: 'Phy',
    imgUrl: 'https://bit.ly/3asVDHN',
    isDead: false,
  },
  {
    id: 'student02',
    firstName: 'Brooke',
    lastName: 'Nemchak',
    imgUrl: 'https://bit.ly/2Y41led',
    isDead: false,
  },
  {
    id: 'student03',
    firstName: 'Gene',
    lastName: 'McNew',
    imgUrl: 'https://bit.ly/2DLSc2Z',
    isDead: false,
  },
  {
    id: 'student04',
    firstName: 'Gwynne',
    lastName: 'Meeks',
    imgUrl: 'https://bit.ly/30YKifd',
    isDead: false,
  },
  {
    id: 'student05',
    firstName: 'Jeanine',
    lastName: 'Beckle',
    imgUrl: 'https://bit.ly/2Y6irIl',
    isDead: false,
  },
  {
    id: 'student06',
    firstName: 'Jeremiah',
    lastName: 'Vasquez',
    imgUrl: 'https://bit.ly/3aEdqvL',
    isDead: false,
  },
  {
    id: 'student07',
    firstName: 'Jim',
    lastName: 'Browning',
    imgUrl: 'https://bit.ly/3h2lJnf',
    isDead: false,
  },
  {
    id: 'student08',
    firstName: 'Jonathan',
    lastName: 'Shearon',
    imgUrl: 'https://bit.ly/3iNPHvB',
    isDead: false,
  },
  {
    id: 'student09',
    firstName: 'Joshua',
    lastName: 'Medlen',
    imgUrl: 'https://bit.ly/2EaO7oz',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Kamiran',
    lastName: 'Ibrahim',
    imgUrl: 'https://bit.ly/31RSpcY',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Mark',
    lastName: 'Young',
    imgUrl: 'https://bit.ly/3fWvgep',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Matt',
    lastName: 'Logan',
    imgUrl: 'https://bit.ly/31VTyjG',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Michael',
    lastName: 'Dotson',
    imgUrl: 'https://bit.ly/2Y1AeA8',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'Nate',
    lastName: 'Owens',
    imgUrl: 'https://bit.ly/2Y4aUtm',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'Nick',
    lastName: 'Walters',
    imgUrl: 'https://bit.ly/30YXAIN',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'Nikhil',
    lastName: 'Gaikwad',
    imgUrl: 'https://bit.ly/3iJTr1n',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'Ola',
    lastName: 'Oladinni',
    imgUrl: 'https://bit.ly/2E5AJ5c',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Pete',
    lastName: 'Stewart',
    imgUrl: 'https://bit.ly/3kNpVJX',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Phonesalo',
    lastName: 'Sihanorak',
    imgUrl: 'https://bit.ly/31Z1m3Y',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Ryan',
    lastName: 'Beiden',
    imgUrl: 'https://bit.ly/3kNpZtb',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'William',
    lastName: 'Campbell',
    imgUrl: 'https://bit.ly/3atXyfe',
    isDead: false,
  },
];

const livingStudents = () => students.filter((student) => student.isDead === false);

const dearlyBeloved = () => students.filter((student) => student.isDead === true);

const followTheLight = () => {
  const livingStudentIds = livingStudents().map((student) => student.id);
  const randomChance = Math.floor(Math.random() * (livingStudentIds.length));
  students.find((student) => student.id === livingStudentIds[randomChance]).isDead = true;
};

export default {
  livingStudents,
  dearlyBeloved,
  followTheLight,
};
