# Quiz about adaptive web design [![Deploy](https://github.com/andraspatka/awd-quiz/actions/workflows/deploy.yml/badge.svg)](https://github.com/andraspatka/awd-quiz/actions/workflows/deploy.yml)

Folder structure:

 - src: source code
    - challenges
    - components
    - redux
    - styles
    - utils
 - public:
    - assets

Running it locally:

```sh
npm install
npm start
```

## Deploying it to AWS S3

The react application can be built into static html/js/css files using:

```sh
npm run build
```

The result of this command is automatically uploaded to S3 via Github actions.

## Acknowledgements

This project is a fork of:
- https://github.com/bonham000/app-time-lessons

## Adding more questions

See [CONTIRBUTING.md](CONTRIBUTING.md).