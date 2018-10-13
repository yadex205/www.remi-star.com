import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer className="o-footer">
      <div className="o-footer__inner">
        <div className="o-footer__copy">
          &copy; 2017-present re-mi All rights resetved.
        </div>
        <Link className="o-footer__policy-link" to="/policy">site policy</Link>
      </div>
    </footer>
  );
}