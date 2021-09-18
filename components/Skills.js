import React from 'react';
import styles from '../styles/Home.module.css';

export const Skills = () => {
  return (
    <div className="containerSkills">
      <h1 className={styles.firstTitle}>About Me</h1>
      <div className="container">
        <div className="profile">
          <h1 className={styles.title}>Profile</h1>
          <p>
            Hi, my name is <b>Francisco</b>.
            <br />I am a <b>serious person</b>, with great motivation to{' '}
            <b>learn and develop new skills</b>. I am persistent in achieving my
            goals and I have a <b>great capacity to adapt</b> to new
            professional environments.
          </p>
        </div>
        <div className="soft-skills">
          <h1 className={styles.title}>Software Skills</h1>
          <ul>
            <li>HTML</li>
            <li>
              CSS
              <dl>Styled-components</dl>
              <dl>Style jsx</dl>
              <dl>Module css</dl>
            </li>
            <li>
              Javascript
              <dl>React Js</dl>
              <dl>Next Js</dl>
            </li>
            <li>
              Firebase
              <dl>Firebase Auth</dl>
              <dl>Firestore</dl>
            </li>
            <li>Github y git</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .soft-skills {
          border-radius: 8px;
          flex: 1;
          padding: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .profile {
          border-radius: 8px;
          flex: 1;
          padding: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .containerSkills {
          width: 90%;
          margin: 0 auto;
          margin-top: 2rem;
        }

        @media only screen and (min-width: 1000px) and (max-width: 1920px) {
          .containerSkills {
            width: 60%;
          }
        }

        .container {
          display: flex;
          column-gap: 15px;
          padding: 20px 20px;
        }

        @media only screen and (min-width: 275px) and (max-width: 860px) {
          .container {
            flex-direction: column;
            gap: 15px;
            padding: 0px;
          }
        }

        li {
          font-weight: 500;
        }
        dl {
          margin: 0;
          padding-left: 8px;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};
