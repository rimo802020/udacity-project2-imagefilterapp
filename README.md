# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

## Tasks

### Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`
3. Open the following link (Locally by NOde.js)
   http://localhost:8082/filteredimage?image_url=https://picsum.photos/200
4. Open the following link by AWS Elastic Beanstalk Environment
   http://udagram-reem-dev-dev.eu-west-2.elasticbeanstalk.com/filteredimage?image_url=https://picsum.photos/300

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.
