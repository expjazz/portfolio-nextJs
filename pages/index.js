import Head from 'next/head';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import SideBar from '../components/SideBar/index';
import Scroll from '../components/Scroll';
import allProjects from '../components/projects';
import Project from '../components/portfolio/Project';
import Me from '../components/Me';

const ProjButton = styled.button`
  margin: 0;
  padding: 0 !important;
  background-color: 'white' !important;
`;

export default function Home() {
  const sections = [
    { id: 'top', name: 'Intro', icon: 'fa-home' },
    { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
    { id: 'about', name: 'About Me', icon: 'fa-user' },
    { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
  ];
  const [projIndex, setProjIndex] = useState(0);
  const handleProjShow = index => {
    setProjIndex(index);
  };
  return (
    <>
      <SideBar sections={sections} />
      <div id="main">
        <section id="top" className="one dark cover">
          <div className="container">
            <h2 className="alt">
              Hi! I'm <strong>Expedito</strong>
              <br />
              Web developer
            </h2>
            <p>I have made few things check it out.</p>
            <footer>
              <Scroll type="id" element="portfolio">
                <a href="#portfolio" className="button">
                  Show me
                </a>
              </Scroll>
            </footer>
          </div>
        </section>

        <section id="portfolio" className="two">
          <div className="container">
            <header>
              <h2>Portfolio</h2>
            </header>

            <p>
              Coding is bringing new ideas to life, to make the world better one
              line at a time. Here I showcase my tries to make a difference;
            </p>

            <div className="row">
              {
                <Project
                  key={allProjects[projIndex].title}
                  id="current"
                  title={allProjects[projIndex].title}
                  githubUrl={allProjects[projIndex].githubUrl}
                  projectUrl={allProjects[projIndex].projectUrl}
                  subtitle={allProjects[projIndex].subtitle}
                  image={allProjects[projIndex].image}
                  stack={allProjects[projIndex].stack}
                />
              }
              {allProjects.map((proj, index) => {
                if (index !== projIndex) {
                  return (
                    <div className="col-4 col-12-mobile">
                      <article className="item">
                        <ProjButton
                          type="button"
                          className="image fit"
                          onClick={() => handleProjShow(index)}
                        >
                          <header>
                            <h3>{proj.title}</h3>
                          </header>
                        </ProjButton>
                      </article>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>

        <section id="about" className="three">
          <div className="container">
            <header>
              <h2>About Me</h2>
            </header>

            <a href="/#" className="image featured"></a>

            <p>
              I'm a musician/web developer that loves to bring new ideas to
              life. I have a solid and successful career playing jazz and
              instrumental music, with experience of playing in different
              countries and cities. <br /> After being in love with music for my
              whole life, I found another passion in web development. Much like
              in music, I can give life to all my creativity.
            </p>
          </div>
        </section>

        <section id="contact" className="four">
          <div className="container">
            <header>
              <h2>Contact</h2>
            </header>

            <p>Let's create something great.</p>

            <form method="post" data-netlify="true">
              <div className="row">
                <div className="col-6 col-12-mobile">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-mobile">
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="Message" />
                </div>
                <div className="col-12">
                  <input type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
