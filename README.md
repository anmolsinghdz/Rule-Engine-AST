# Rule-engine-ast

# Rule Engine with AST

This project is a Rule Engine built using Node.js and MongoDB that evaluates user eligibility based on defined rules. The rules are defined in a string format and converted into an Abstract Syntax Tree (AST) for evaluation against user data. 

## Features

- Create rules using a simple string format.
- Evaluate user data against the defined rules.
- Connects to a MongoDB database to store and manage rules.
- Built with Express.js for the backend and React.js for the frontend.
- API endpoints for rule creation and evaluation.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Testing the Project](#testing-the-project)
- [Contributing](#contributing)
- [License](#license)

## Technologies

- **Backend**: 
  - Node.js
  - Express.js
  - Mongoose (MongoDB ODM)
- **Frontend**: 
  - React.js
  - Axios (for API calls)
- **Database**: 
  - MongoDB
- **Others**: 
  - dotenv (for environment variable management)

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd rule-engine-ast


cd backend
npm install


cd ../frontend
npm install
