# create-react-django-app

![Image](https://user-images.githubusercontent.com/11501902/169211080-f0beca5a-ccb9-430a-8609-266e458d5ec0.png)
(Customers can be added through POST request or with the backend GUI at localhost:8000/customer/create)

## What's included?

### Frontend

- TypeScript (frontend language)
- React (frontend framework)
  - Create React App (support for TSX, ES6, TypeScript, no need to install bundler, ...etc)
  - An example fetch() GET request to the server in the `client/src/App.tsx`

### Backend

- Python3 (backend language)
  - Poetry (Python dependency management system)
  - Black (formatter)
  - Psycopg2 (PostgreSQL adapter for Python)
  - Python-decouple (to get env file content)
- Django (backend framework)
  - Django REST Framework (Django's toolkit for building Web APIs)
  - An example app in the `server/exampleApp` folder showing how to setup API models, serializers, and views
- PostgreSQL (database)

## Getting Started

Clone this repository to your local machine:

```bash
git clone https://github.com/kevinshen56714/create-react-django-app.git
```

### To run the client

In the project folder,

```bash
cd client
yarn && yarn start
```

### To run the server

#### Django and PostgreSQL

You first need to have [PostgreSQL](https://www.postgresql.org/download/) installed and running, and create a user and a database. Afterwards, create a `.env` file in the project root or server directory to store your database information along with some Django settings. It may look something like this:

##### `.env` file (at project root or server directory)

```bash
SECRET_KEY = your-django-secret-key
DEBUG = True  # set to False in production
DB_NAME = your-db-name
DB_USER = your-user-name
DB_PASSWORD = your-user-password
DB_HOST = localhost  # set to your domain name in production
DB_PORT = 5432
```

#### Poetry

In addition to the database, you need to setup the Python environment. We use [poetry](https://python-poetry.org/docs/#installation) for dependency management, so poetry needs to be installed first. Once installed, in the project folder,

```bash
poetry shell  # this should create a virtualenv for you at .venv
poetry install
cd server
python manage.py migrate  # make sure your selected Python interpreter is the one in .venv
python manage.py runserver
```

Once the server is running, you can go to localhost:8000/customer/, localhost:8000/customer/create to play around with the example API GET and POST requests.

If you add customers at localhost:8000/customer/create, you should see the customer information shown on the frontend at localhost:3000
