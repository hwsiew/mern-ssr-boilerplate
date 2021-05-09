FROM node

WORKDIR /app

COPY package*.json .

ARG NODE_ENV
# npm will omit devDependencies when NODE_ENV is set to product or when --production flag is used
RUN npm install 

COPY ./webpack.backend.js .
COPY ./webpack.frontend.js .
COPY ./backend ./backend
COPY ./frontend ./frontend

ENV PORT 3000
EXPOSE ${PORT}
CMD ["npm", "run", "dev"]


