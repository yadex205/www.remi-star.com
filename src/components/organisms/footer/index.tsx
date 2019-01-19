import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer className="o-footer">
      <div className="o-footer__inner">
        <div className="o-footer__copy">
          &copy; 2019 re-mi All rights reserved.
        </div>
        <Link className="o-footer__policy-link" to="/policy">site policy</Link>
      </div>
    </footer>
  );
}
