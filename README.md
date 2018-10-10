@yadex205/scaffold-ssg-cms-hybrid
=================================

Features
--------

* Static site generation by Gatsby.js v2
* Sass with glob importing
* ESNext + TypeScript
* React v16 + Redux


Browser Support
---------------

Depends on Gatsby.js (see https://www.gatsbyjs.org/docs/browser-support/).


Requirements
------------

* Node.js `>= 6.11.5`
* npm or yarn


How to use
----------

### Setup

```bash
# Download this scaffold and install dependencies automatically
PROJECT_NAME=my-awesome-site curl https://raw.githubusercontent.com/yadex205/scaffold-ssg-cms-hybrid/master/go | node

# If PROJECT_NAME was not given, scaffold will be placed on `$PWD/my-project`

# Move into your project
cd my-awesome-site

# Let's make pages with your favorite editor!
emacs src/pages/index.tsx

# Launch live preview
npm run develop # or yarn develop
```

### Linting

```bash
npm run lint (or yarn lint)
```

### Use Lighthouse

For testing with Lighthouse, you can use http2 enabled Nginx as a Docker container.


#### Requirements

* Docker
* docker-compose

#### Run

```bash
# Build website
npm run build # or yarn build

# Start nginx container
docker-compose up

# Then access to https://localhost:8443 and run Lighthouse

# After checking, stop the container
docker-compose down
```

#### Note

* Self-signed SSL certificate generated while `docker-compose up` is used for https access, so **Not Secure** warning may be shown.


Notes
-----

* `gatsby develop` DOESN'T support **IE11** https://github.com/gatsbyjs/gatsby/issues/8522
  But generated site by `gatsby build` works correctly on IE11.
