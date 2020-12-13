import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p>©Copyright 2020</p>
        <p className='members'>
          Project developed by{' '}
          <a href="https://www.linkedin.com/in/cduessel/" target="_blank" rel="noopener noreferrer">
            {' '}
            Christian Düssel
          </a>
          <a
            href="https://www.linkedin.com/in/araujoluiz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Luiz Araujo
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-beaumord/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Matheus Beaumord
          </a>
          <a
            href="https://www.linkedin.com/in/paulo-ricardo-zambelli-taveira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Paulo Ricardo Zambelli
          </a>
          {' '}
          &
          <a
            href="https://www.linkedin.com/in/rafaelassad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Rafael Assad
          </a>{' '}
        </p>
      </footer>
    );
  }
}

export default Footer;
