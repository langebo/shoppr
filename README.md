# shoppr

## prerequisities

- docker & docker-compose
- npm
- watchman (needed for relay --watch)

## backend

run the backend including the database

```bash
cd docker
docker-compose up
```

## frontend

run the frontend

```bash
cd frontend
npm start
```

## relay-compile watcher

run relay-compile in watch mode (if you have watchman installed)

```bash
cd frontend
npm run relay
```
