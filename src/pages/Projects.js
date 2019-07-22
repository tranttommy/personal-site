import React from 'react';
import { H2, ProjectsUl } from '../components/styles';
import megaNap from '../../assets/meganap-screenshot.png';
import tacoMountain from '../../assets/taco-mountain-screenshot.png';
import verseParse from '../../assets/verse-parse-screenshot.png';


export default function Projects() {
  return (
    <ProjectsUl>
      <li>
        <div>
          <img src={megaNap} />
        </div>
        <H2>
          <a href="https://meganap.com" target="_blank" rel="noopener noreferrer">Mega Nap</a>
        </H2>
        <p>React, Redux, Node, Express, Mongoose, Auth0</p>
        <p>
          Mega Nap is the easiest way to make a full-stack application without having to write a lick of back-end code. Mega Nap provides an interface for front-end developers to create a database, design schemas, and add data. The data added can include images, which are uploaded to Cloudinary. Endpoints are immediately generated for use and can be shared with others.
        </p>
        <p>
          GitHub:
          <a href="https://github.com/grandpapi/meganap-client" target="_blank" rel="noopener noreferrer">Client</a>
          |
          <a href="https://github.com/grandpapi/meganap-server" target="_blank" rel="noopener noreferrer">Server</a>
        </p>
      </li>
      <li>
        <div>
          <img src={tacoMountain} />
        </div>
        <H2>
          Taco Mountain
        </H2>
        <p>Node, Express, Mongoose, Twilio, Inquirer</p>
        <p>
          Let’s hike to Taco Mountain! Taco Mountain is a RESTful restaurant database API that stores data on users, customers, menu items, orders, and various aggregations. Upon making an order, the customer receives a text of their order via Twilio. The app also comes with an Inquirer client so that users can sign up or sign in as customers to make orders or as admins to edit the menu and view metrics.
        </p>
        <p>
          GitHub:
          <a href="https://github.com/tacomountain/taco-mountain" target="_blank" rel="noopener noreferrer">Server</a>
        </p>
      </li>
      <li>
        <div>
          <img src={verseParse} />
        </div>
        <H2>
          <a href="https://verse-parse.netlify.com" target="_blank" rel="noopener noreferrer">Verse Parse</a>
        </H2>
        <p>HTML/CSS, vanilla JavaScript, Firebase</p>
        <p>
          Return the correct song with Verse Parse, a front-end app that uses the Musixmatch API to generate a lyric-guessing game based on the user’s favorite artists. The app uses Firebase’s authentication and Realtime Database to handle user data.
        </p>
        <p>
          GitHub:
          <a href="https://github.com/heartfart-panda/verse-parse" target="_blank" rel="noopener noreferrer">Client</a>
        </p>
      </li>
    </ProjectsUl>
  );
}
