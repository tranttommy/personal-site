import React from 'react';
import { H2 } from '../components/styles';

export default function Projects() {
  return (
    <ul>
      <li>
        <img />
        <H2>
          <a href="https://meganap.com">Mega Nap</a>
        </H2>
        <p>React, Redux, Node, Express, Mongoose</p>
        <p>
          Mega Nap is the easiest way to make a full-stack application without having to write a lick of back-end code. Mega Nap provides an interface for front-end developers to create a database, design schemas, and add data. The data added can include images, which are uploaded to Cloudinary. Endpoints are immediately generated for use and can be shared with others.
        </p>
      </li>
      <li>
        <img />
        <H2>
          <a>Taco Mountain</a>
        </H2>
        <p>Node, Express, Mongoose, Twilio, Inquirer</p>
        <p>
          Taco Mountain is a RESTful restaurant API that contains data on users, customers, menu items, orders, and various aggregations. Upon making an order, the server will also send the customer a text of their order via Twilio. The app also comes with a client made with Inquirer so that users can sign up or sign in as customers to make orders or as admins to edit the menu and view metrics.
        </p>
      </li>
      <li>
        <img />
        <H2>
          <a href="https://verse-parse.netlify.com">Verse Parse</a>
        </H2>
        <p>HTML/CSS, vanilla JavaScript, Firebase</p>
        <p>
          Verse Parse is a front-end app that uses the Musixmatch API to generate a lyric-guessing game based on the user’s favorite artists. The app also uses Firebase’s authentication and real-time database to handle user data.
        </p>
      </li>
    </ul>
  );
}
