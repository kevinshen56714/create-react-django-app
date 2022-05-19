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
  - Black (formatter)
  - Psycopg2 (PostgreSQL adapter for Python)
- Django (backend framework)
  - Django REST Framework (Django's toolkit for building Web APIs)
  - An example app in the `server/exampleApp` folder showing how to setup API models, serializers, and views
- PostgreSQL (database)
- Poetry (Python dependency management system)

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

#### PostgreSQL

You first need to have [PostgreSQL](https://www.postgresql.org/download/) installed and running. You need to create a user and a database, and enter your information in the DATABASES section of `server/main/settings.py`. It may look something like this:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "your-db-name",
        "USER": "your-user",
        "PASSWORD": "your-password",
        "HOST": "localhost",
        "PORT": "5432",
        # You can instead use the following OPTIONS if you have the files set up
        # see more at https://docs.djangoproject.com/en/4.0/ref/databases/#postgresql-notes
        # "OPTIONS": {
        #     "service": "my_service",
        #     "passfile": ".my_pgpass",
        # },
    }
}
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
