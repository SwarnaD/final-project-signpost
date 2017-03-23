# System Design

## Table of Contents
1. [CRC Cards](#crc-cards)
2. [System-Environment Interaction](#system-environment-interaction)
3. [System Architecture](#system-architecture)
4. [System Decomposition](#system-decomposition)

## CRC Cards

**User**
* Parent class: N/A
* Subclasses: N/A
* Responsibilities:
  - Knows primary user details (name, email).
  - Knows other details (interests, followed groups, managed groups, subscribed events).
  - Make database requests.
  - Provide information to controllers.
* Collaborators:

**Group**
* Parent class: N/A
* Subclasses: N/A
* Responsibilities:
  - Knows primary group details (name, owner, managers).
  - Knows other details (followers, default tags).
  - Make database requests.
  - Provide information to controllers.
* Collaborators:

**Event**
* Parent class: N/A
* Subclasses: N/A
* Responsibilities:
  - Track primary event details (name, time, location, group).
  - Track other details (tags, privacy settings, pictures, comments, subscribers).
  - Make database requests.
  - Provide information to controllers.
* Collaborators:

## System-Environment Interaction
Our system runs on a webserver which requires an up-to-date installation of [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/). The network for the server must be configured to service incoming connections on the npm server port (8000 by default).

## System Architecture
Our application is built using a MEAN (MongoDB, Express, AngularJS, Node.js) stack, implementing a MVC setup:
* [MongoDB](https://www.mongodb.com/): Store information persistently. Communicate with controllers.
* [Express](https://expressjs.com/) (models, controllers): Handle and route API requests, processing information via controllers. Commmunicate with the database, send API responses.
* [Angular 2](https://angular.io/) (views, controllers): Forward user events to the API request handler, receive API responses and update views.
* [Node.js](https://nodejs.org/) (server): Host the application, service incoming requests.

![Diagram][diagram]

[diagram]: sysarch.png

## System Decomposition
Events trigged by users on the frontend (Angular 2) are serviced by our server (Node.js) by routing through an API handler (Express) that communicates with, retrieves information from, and/or updates the database (if necessary), responding to the frontend, which uses the response to update views for the users. Views are styled and presented using templates, incorporating any scripts or media if necessary. Anticipated invalid events should trigger appropriate error-handling views, providing as much information to the user as necessary. Unanticipated invalid events should trigger generic error landings.
