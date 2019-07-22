import React from 'react';
import resume from '../../assets/RESUME_Tommy_Tran.pdf';
import { H2, ContactUl } from '../components/styles';

export default function Contact() {
  return (
    <ContactUl>
      <li>
        <H2>tranttommy95@gmail.com</H2>
      </li>
      <li>
        <H2>
          <a href="https://www.linkedin.com/in/tranttommy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </H2>
      </li>
      <li>
        <H2>
          <a href="https://www.github.com/tranttommy" target="_blank" rel="noopener noreferrer">GitHub</a>
        </H2>
      </li>
      <li>
        <H2>
          <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </H2>
      </li>
    </ContactUl>
  );
}
