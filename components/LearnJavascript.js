import React from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export const LearnJavascript = () => {
  return (
    <>
      <a href="https://berry-rifle-c8e.notion.site/Entrenando-la-l-gica-con-Javascript-by-Francisco-Veiras-6fb88d6265a64e0a881f910ab3e9074b">
        <div className="container">
          <div className="card">
            <div>
              <div className="users-number">
                <p>Training</p>
              </div>
              <h1 className={styles.title}>
                Logic training with Javascript by Francisco Veiras
              </h1>
              <p>
                Training logic is very important, thats why i give you exercises
                to practice it and also along with the Javascript syntax. All
                exercises have their resolution in video format made by me.
              </p>
            </div>
            <div className="box2">
              <Image width={180} height={180} src="/js.png" />
            </div>
          </div>
        </div>
        <style jsx>{`
          .card {
            cursor: pointer;
            border-radius: 7px;
            padding: 20px 20px;
            grid-gap: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
            transition: 0.2s;
          }
          .card:hover {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
            transition: 0.2s;
          }
          .container {
            width: 90%;
            padding: 0px;
            margin: 0 auto;
          }
          @media only screen and (min-width: 1200px) and (max-width: 1520px) {
            .container {
              width: 70%;
            }
          }

          @media only screen and (min-width: 1520px) and (max-width: 1920px) {
            .container {
              width: 60%;
            }
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
      </a>
    </>
  );
};
