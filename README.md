# GIT Commit History
This app show a list of commits from a specific repo.

The services for this solution includes:

## Frontend.
This is a React app which use SemanticUI for some components. It is running on port 8080.

## Backend.
This is an express service which provides access to Git commits though the @octokit/core package. It is running on port 5000

## Cache services.
This is a Redis server which provides cache feature. It is running on port 6379

## How to run it?
For the __backend__ create an .env file in the __main root__ with the following content:
```
BACKEND_PORT=5000
OWNER=alvarotolentino
REPO=commit-history
REDIS_HOST:127.0.0.1
REDIS_PORT:6379
```

For the __frontend__ create an .env file in the in the __client folder__ with the following content:
```
REACT_APP_BACKEND_HOST=localhost
REACT_APP_BACKEND_PORT=5000
```

The entire application can be run with a single terminal command:

```
docker-compose up -d
``` 

The URL to access to the application is:

```
http://localhost:8080/
```

After run this command the following will have been created:

Containers:
- redis
- backend
- frontend

Volumes:
- commit-history_node_modules

Network
- commit-history_app-network
  
If you want to stop it, run the following command:

```
docker-compose down
```