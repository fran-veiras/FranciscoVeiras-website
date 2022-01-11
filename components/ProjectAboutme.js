/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/Home.module.css';

export const ProjectAboutme = () => {
  return (
    <div className="container-project-link">
      <h1 className={styles.firstTitle}>Latest apps</h1>
      <a href="https://aboutme-cards.vercel.app/">
        <div className="container">
          <div className="profile">
            <div className="text-container">
              <div className="users-number">
                <p>+100 users</p>
              </div>
              <a className="link" href="https://aboutme-cards.vercel.app/">
                <h1 className={styles.title}>AboutMe App</h1>
              </a>
              <p>
                AboutMe is a platform where the user can create a card with
                professional information and share it on all their social
                networks. User can register with both Google and GitHub
              </p>
              <p>
                <b>
                  NextJs, Chakra Ui, Dynamic routes, Firestore & Firebase auth
                </b>
              </p>
            </div>
            <div className="img-container">
              <a href="https://aboutme-cards.vercel.app/">
                <img src="/aboutme.png" alt="img app"></img>
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
          column-gap: 20px;
          flex-direction: column;
          transition: 0.2s;
          cursor: pointer;
          align-items: center;
        }

        .profile:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          transition: 0.2s;
        }

        @media only screen and (min-width: 1200px) and (max-width: 1520px) {
          .container-project-link {
            width: 70%;
          }
          .profile {
            flex-direction: row;
          }
        }

        @media only screen and (min-width: 1520px) and (max-width: 1920px) {
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
          box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .link {
          cursor: pointer;
        }
        .users-number {
          background: #0070f3;
          border-radius: 7px;
          display: inline-block;
          margin: 0px;
          padding: 5px;
        }

        .users-number p {
          margin: 0px;
          color: #fff;
        }
      `}</style>
    </div>
  );
};
