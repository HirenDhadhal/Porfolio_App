import shareeval from '../assets/png/DevConnector.png';
import travel from '../assets/png/golang_kafka.png';
import gamify from '../assets/png/movies.png';
import eye from '../assets/png/job_app.png';

export const projectsData = [
  {
    id: 1,
    projectName: 'Job Application Management',
    projectDesc:
      'A backend microservices app which manages Jobs, Companies and their reviews using API Gateway and provides reliability using RabbitMQ and uses Docker containers',
    tags: [
      'Java, Springboot',
      'RabbitMQ, Docker',
      'PostgreSQL',
      'Microservices',
    ],
    code: 'https://github.com/HirenDhadhal/JobApp_Microservices',
    image: eye,
  },
  {
    id: 2,
    projectName: 'Movies - IMDB',
    projectDesc:
      'Displays Real-time movies rating and other data fetched from IMDB API',
    tags: ['ReactJS, CSS', 'Javascript'],
    code: 'https://github.com/HirenDhadhal/React_MovieApp',
    demo: 'https://react-imdb-movie.netlify.app/',
    image: gamify,
  },
  {
    id: 3,
    projectName: 'DevConnector',
    projectDesc:
      'REST API web application using Node.js, Express, and MongoDB which lets developers connect to each others, view every profile and add/comment on posts.',
    tags: ['React.js , Node.js', 'Redux, Express.js', 'MongoDB'],
    code: 'https://github.com/HirenDhadhal/DevConnector',
    demo: 'https://devconnector-27xo.onrender.com/',
    image: shareeval,
  },
  {
    id: 4,
    projectName: 'Persistant Messaging App',
    projectDesc:
      'Implemented Docker-based development environment for Apache Kafka and Zookeeper, enabling streamlined development',
    tags: ['GoLang', 'Apache Kafka', 'Docker'],
    code: 'https://github.com/HirenDhadhal/Kafka_GoLang',
    image: travel,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
