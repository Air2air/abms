import React from 'react';
import { Link } from 'react-router-dom';
import marques from '@/data/marques.json';
import './styles.scss';

const imageConcat = image => `https://abms-image-host.netlify.app/marque-logos/${image}`;

const MarqueList = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col marque-grid">
          {marques.map(({ image, name, link }) => (
            <Link to={link} className="marque-link" key={name}>
              <div className="marque-item">
                <div
                  className="marque-image"
                  style={{ backgroundImage: `url(${imageConcat(image)})` }}
                />
                <p className="marque-label">{name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default MarqueList;