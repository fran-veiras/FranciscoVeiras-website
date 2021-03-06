/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css';
import SvgComponent from '../public/github';
import TwitterComponent from '../public/twitter';
import LinkedinComponent from '../public/linkedin';
import { Skills } from '../components/Skills';
import { useEffect, useState } from 'react';
import newProjects from '../components';
import Projects from '../components';
import Head from 'next/head';
import { ProjectLink } from '../components/ProjectLink';
import { ProjectBlog } from '../components/ProjectBlog';
import Yt from '../public/youtube';
import { ProjectAboutme } from '../components/ProjectAboutme';
import { LearnJavascript } from '../components/LearnJavascript';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('./api/hello')
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  projects.map((proj) => {
    console.log(proj.title);
  });

  return (
    <>
      <Head>
        <title>Francisco Veiras - Javascript Dev</title>
        <link className="me" rel="shortcut icon" href="/code.png" />
      </Head>
      <nav>
        <div className="profile-card">
          <img src="/me.jpeg" alt="profile" />
          <div className="text-container">
            <h3 className={styles.name}>FRANCISCO VEIRAS</h3>
            <p className="jsDev">Javascript Developer</p>
          </div>
        </div>
        <div className="social-media">
          <SvgComponent className="icon" />
          <Yt className="icon" />
          <TwitterComponent className="icon" />
          <LinkedinComponent className="icon" />
        </div>
      </nav>
      <Skills />
      <LearnJavascript />
      <ProjectAboutme />
      <ProjectBlog />
      <ProjectLink />
      {/* projects */}

      <div className="projects-container">
        <h1 className={styles.firstTitle}>Projects</h1>
        <div className="projects-flex">
          <span />
          {projects.map((proj) => (
            <Projects
              key={proj.title}
              title={proj.title}
              url={proj.url}
              img={proj.img}
              technologies={proj.technologies}
            />
          ))}
        </div>
      </div>

      <footer>
        <p>
          Made by <b>Francisco Veiras</b>
        </p>
      </footer>
      <style jsx>{`
        .projects-flex {
          display: flex;
          column-gap: 15px;
          overflow-x: scroll;
          padding: 20px 20px;
          padding-bottom: 7%;
        }

        @media only screen and (min-width: 275px) and (max-width: 860px) {
          .projects-flex {
            padding: 20px 0px;
          }
        }

        span {
          width: 20%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(2, 0, 36, 0) 0%,
            rgba(9, 9, 121, 0) 13%,
            rgba(255, 255, 255, 1) 98%
          );
          position: absolute;
          right: 0;
          z-index: 9998;
        }

        .projects-container {
          width: 90%;
          margin: 0 auto;
          margin-top: 3rem;
          margin-bottom: 10%;
          position: relative;
        }

        @media only screen and (min-width: 1520px) and (max-width: 1920px) {
          .projects-container {
            width: 60%;
          }
        }

        @media only screen and (min-width: 1200px) and (max-width: 1520px) {
          .projects-container {
            width: 70%;
          }
        }

        footer {
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          bottom: 0px;
          height: 4%;
          width: 100vw;
          z-index: 9999;
          background: rgba(255, 255, 255);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        nav {
          width: 90%;
          margin: 0 auto;
          padding: 20px 0px;
          display: flex;
          justify-content: space-between;
        }

        @media only screen and (min-width: 1520px) and (max-width: 1920px) {
          nav {
            width: 60%;
          }
        }

        @media only screen and (min-width: 1200px) and (max-width: 1520px) {
          nav {
            width: 70%;
          }
        }

        @media only screen and (min-width: 275px) and (max-width: 860px) {
          nav {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
        }

        .jsDev {
          color: #0070f3;
        }

        .text-container {
          margin-left: 15px;
        }

        .social-media {
          display: flex;
          align-items: center;
        }

        img {
          width: 60px;
          height: 60px;
          border-radius: 9999px;
        }
        .profile-card {
          padding: 10px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        h3 {
          margin-bottom: 0px;
          margin-top: 0px;
        }
        p {
          margin: 0px;
        }
      `}</style>
    </>
  );
}
