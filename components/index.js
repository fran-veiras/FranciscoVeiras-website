/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/Home.module.css';

export default function Projects({ title, url, img, technologies }) {
  return (
    <div className="conatiner">
      <a href={url}>
        <h1 className={styles.title}>{title}</h1>
      </a>
      <p>
        <b>{technologies}</b>
      </p>
      <img src={img} alt={title} />
      <style jsx>{`
        .conatiner {
          border-radius: 8px;
          flex: 1;
          padding: 20px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }
        img {
          width: 400px;
          filter: opacity(40%) blur(2px);
        }

        @media only screen and (min-width: 275px) and (max-width: 860px) {
          img {
            width: 250px;
          }
        }

        h1 {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
