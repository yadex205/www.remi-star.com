import React from 'react';

export const GlobalFooter: React.FC = () => (
  <footer className="o-global-footer">
    <ul className="o-global-footer__social-links-container">
      <li className="o-global-footer__social-link-wrapper">
        <a
          className="o-global-footer__soclai-link"
          href="https://twitter.com/remi_tff"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </li>
      <li className="o-global-footer__social-link-wrapper">
        <a
          className="o-global-footer__soclai-link"
          href="https://www.instagram.com/remi_tff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </li>
      <li className="o-global-footer__social-link-wrapper">
        <a
          className="o-global-footer__soclai-link"
          href="https://www.youtube.com/channel/UC0R8jHmD1ZpzvoS-jrfYK3Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
      </li>
      <li className="o-global-footer__social-link-wrapper">
        <a
          className="o-global-footer__soclai-link"
          href="https://lin.ee/rqvWnEh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Line@
        </a>
      </li>
    </ul>
    <div className="o-global-footer__copyright">&copy; re-mi</div>
  </footer>
);
