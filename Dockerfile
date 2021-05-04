FROM node

WORKDIR /app

COPY package.json .
RUN npm install

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
		then npm install; \
		else npm install --only=production; \
		fi

COPY ./backend ./backend
ENV PORT 3000
EXPOSE ${PORT}
CMD ["npm", "run", "dev"]


