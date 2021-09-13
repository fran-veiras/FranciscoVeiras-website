/* eslint-disable import/no-anonymous-default-export */
const projectsData = [
  {
    title: 'tw-clone',
    url: 'https://twitter-clone-lovat.vercel.app/',
    img: '/twclone.png',
    technologies: 'NextJs, Firebase Auth, Firestore & Vercel',
  },
  {
    title: 'Read-book',
    url: 'https://francisco-svg761.github.io/ReadBook/',
    img: '/Readbook.png',
    technologies: 'ReactJs & styled-components',
  },
  {
    title: 'ProductiveWeek-app',
    url: 'https://francisco-svg761.github.io/ProductiveWeek/',
    img: '/Productive.png',
    technologies: 'ReactJs & styled-components',
  },
  {
    title: 'Todo-list',
    url: 'https://francisco-svg761.github.io/TodoList-app/',
    img: '/todo.png',
    technologies: 'ReactJs',
  },
  {
    title: 'Peticiones-http-api',
    url: 'https://francisco-svg761.github.io/Peticiones-Http-React/',
    img: '/gif.png',
    technologies: 'ReactJs',
  },
  {
    title: 'Javascript vanilla',
    url: 'https://github.com/francisco-svg761/-JavaScript30',
    img: '/jsvanilla.png',
    technologies: 'Javascript',
  },
];

export default (req, res) => {
  res.status(200);
  res.setHeader('content-type', 'application/json');
  res.send(JSON.stringify(projectsData));
};
