const course = (number, title) => ({
  label: `CS ${number}: ${title}`,
  href: `https://ecampus.oregonstate.edu/soc/ecatalog/ecoursedetail.htm?subject=CS&coursenumber=${number}&termcode=ALL`,
});

export const sections = [
  {
    title: 'GENERAL OSU CS LINKS',
    links: [
      { label: 'Oregon State Electrical Engineering and Computer Science', href: 'https://eecs.oregonstate.edu/' },
      { label: 'OSU Software for Engineering Students', href: 'https://it.engineering.oregonstate.edu/download-software' },
      { label: 'COE IT Connect', href: 'https://it.engineering.oregonstate.edu/connect' },
      { label: 'Courses by semester', href: 'https://classes.engr.oregonstate.edu/eecs/' },
      { label: 'OSU Academic Calendar', href: 'https://registrar.oregonstate.edu/osu-academic-calendar' },
      { label: 'Canvas Login', href: 'https://ecampus.oregonstate.edu/services/start/canvas-login.htm/' },
      { label: 'Beaver Hub Login', href: 'https://uit.oregonstate.edu/beaver-hub' },
    ],
  },
  {
    title: 'PREVIOUS COURSES',
    links: [
      course(161, 'Introduction to Computer Science I'),
      course(162, 'Introduction to Computer Science II'),
      course(225, 'Discrete Structures in Computer Science'),
      course(261, 'Data Structures'),
      course(271, 'Computer Architecture and Assembly Language'),
      course(290, 'Web Development'),
      course(340, 'Introduction to Databases'),
      course(344, 'Operating Systems I'),
      course(361, 'Software Engineering I'),
      course(362, 'Software Engineering II'),
      course(372, 'Introduction to Computer Networks'),
      course(492, 'Mobile Software Development'),
      course(391, 'Social and Ethical Issues in Computer Science'),
      course(406, 'Projects'),
      course(352, 'Introduction to Usability Engineering'),
      course(467, 'Capstone Project'),
      course(325, 'Analysis of Algorithms'),
    ],
  },
  {
    title: 'PROGRAMMING RESOURCES',
    links: [
      { label: 'Oreilly', href: 'https://learning.oreilly.com/' },
      { label: 'LeetCode', href: 'https://leetcode.com/' },
      { label: 'sql-practice', href: 'https://www.sql-practice.com/' },
      { label: 'JavaScript for impatient programmers', href: 'https://exploringjs.com/impatient-js/toc.html' },
      { label: 'Eloquent JavaScript', href: 'https://eloquentjavascript.net/' },
    ],
  },
  {
    title: 'ABOUT',
    links: [
      { label: 'Resume', href: '/resume/cv.pdf' },
      { label: 'Github', href: 'https://github.com/frederim' },
    ],
  },
];

export const email = 'frederim@oregonstate.edu';
