# Getting Started with Sus Recipies

This project was created with Ract, here's a link to it. [here's a link to it.](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley).

I use Axios to make requests to the API. If you want to use fetch() you can change it.

## Installing and running on your local machine

Before installing make sure you create a .env file in the root of the project and put in your API key like this:
REACT_APP_API_KEY=fo0baR1b2
REACT_APP_APP_ID=5481354

Replace fo0baR1b2 and 5481354 with your API key and APP ID.

I use yarn because it's better, however you can choose to be primitive and use NPM:

### `yarn install`

This command installs.

### `yarn start`

This command starts the project.

### `yarn build`

This command builds the project.

### `yarn eject`

I have no idea what this does.

If that does not work, you can use docker to run the project.$

### `docker build -t react-docker:1.0.0-dev .`

### `docker run --rm -it --name web -p 3000:3000 -v $(pwd):/code react-docker:1.0.0-dev`

NOTE: If you are using powershell write `docker run --rm -it --name web -p 3000:3000 -v ${pwd}:/code react-docker:1.0.0-dev`
