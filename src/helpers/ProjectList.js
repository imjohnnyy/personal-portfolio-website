import CabsPro from "../assets/CabsPro.png";
import WeatherApp from "../assets/WeatherApp.png";
import StatusPostingSystem from "../assets/StatusPostingSystem.png";
import SPEED from "../assets/SPEED.png";
import PortfolioApp from "../assets/PortfolioApp.png";

export const ProjectList = [
  {
    name: "CabsPro",
    image: CabsPro,
    description: "CabsPro is a web application that allows users to book taxis online. This app allows for CRUD functionalities, where a booking record can be created and is stored in the MySQL database. The booking records can be retrieved, displayed, updated, and deleted from the database and the app. AJAX is also another functionality where the records of the booking can be updated without the need to refresh the webpage. ",
    projectLocation: "https://github.com/imjohnnyy/CabsPro",
    skills: [" JavaScript, ", "PHP, ", "MySQL, ", "Bootstrap, ", "jQuery, ", "HTML, ", "CSS "],
  },
  {
    name: "Software Practice Empirical Evidence Database (SPEED)",
    image: SPEED,
    description: "SPEED is a MERN Stack web app where users are able to add, view, and filter articles. This app was worked on by a team of 3. The Agile Scrum methodology along with a mob programming approach were utilized throughout the development of this app.",
    projectLocation: "https://github.com/imjohnnyy/CISE_SPEED",
    skills: [" React, ", "Node.js, ", "Express.js, ", "MongoDB, ", "HTML, ", "CSS "]
  },
  {
    name: "Weather Forecast App",
    image: WeatherApp,
    description: "This is a simple weather forecast app that fetches data from OpenWeather’s current weather API once the user inputs a specific city name. The weather data of the city entered will then be displayed.",
    projectLocation: "https://github.com/imjohnnyy/Weather-Forecast-App",
    skills: [" React, ", "HTML, ", "CSS, ", "OpenWeatherAPI"]
  },
  {
    name: "Status Posting System",
    image: StatusPostingSystem,
    description: "This is a simple 'Diary system' web app that allows users to post their status and the posts are saved into the MySQL database table. The statuses can be retrieved using text matching and all matched statuses can be viewed in the order they are posted.  ", 
    projectLocation: "https://github.com/imjohnnyy/status-posting-system",
    skills: [" PHP, ", "MySQL, ", "Bootstrap, ", "HTML, ", "CSS "]
  },
  {
    name: "This Portfolio Website",
    image: PortfolioApp ,
    description: "This is a web app that allows me to provide information about myself such as: my career goal, my technical skills, some ways to contact me, along with showcasing some of the projects that I have completed. ", 
    projectLocation: "https://github.com/imjohnnyy/personal-portfolio-website",
    skills: [" React, ", "HTML, ", "CSS, ", "Material UI"]
  },


];
