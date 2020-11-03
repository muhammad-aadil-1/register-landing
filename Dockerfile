FROM node:10 as build-deps

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install global add gatsby-cli


RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.16-alpine
COPY --from=build-deps /usr/src/app/public /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]  

# EXPOSE 3000
# CMD [ "npm", "start" ]