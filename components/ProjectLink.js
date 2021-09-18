/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/Home.module.css';

export const ProjectLink = () => {
  return (
    <div className="container-project-link">
      <h1 className={styles.firstTitle}>Latest app</h1>
      <a href="https://document-link.vercel.app/">
        <div className="container">
          <div className="profile">
            <div className="text-container">
              <a className="link" href="https://document-link.vercel.app/">
                <h1 className={styles.title}>Document.link</h1>
              </a>
              <p>
                document.link is an application made with the aim of finding
                content to learn frontend for free. Communities, courses and
                writings.
                <br />
                users can login and collaborate
              </p>
              <p>
                <b>NextJs, Style jsx, Firebase, Firestore </b>
              </p>
            </div>
            <div className="img-container">
              <a href="https://document-link.vercel.app/">
                <img src="/document.png" alt="img app"></img>
              </a>
            </div>
          </div>
        </div>
      </a>
      <style jsx>{`
        .text-container {
          flex: 2.2;
        }
        .img-container {
          flex: 2;
        }

        .container-project-link {
          width: 90%;
          margin: 0 auto;
          margin-top: 2rem;
        }

        .profile {
          border-radius: 8px;
          flex: 1;
          padding: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          display: flex;
          column-gap: 15px;
          flex-direction: column;
          transition: 0.2s;
          cursor: pointer;
        }

        .profile:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          transition: 0.2s;
        }

        @media only screen and (min-width: 1000px) and (max-width: 1920px) {
          .container-project-link {
            width: 60%;
          }
          .profile {
            flex-direction: row;
          }
        }
        .container {
          padding: 20px 20px;
        }

        @media only screen and (min-width: 275px) and (max-width: 860px) {
          .container {
            padding: 0px;
          }
        }

        img {
          width: 100%;
          height: auto;
          border-radius: 7px;
          cursor: pointer;
        }
        .link {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
