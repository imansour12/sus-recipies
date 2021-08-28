FROM node:14.17.3-buster

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json 
RUN yarn install

COPY . .

CMD ["yarn","run","start" ]

# docker run --rm -it -name web -p 3000:3000 react-docker:1.0.0-dev