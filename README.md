This project demonstrates how to setup a simple API for the todo application. The database is already configured and setup remotely. You just need to install the dependencies and start the server.

## Instructions

Install dependencies:

```bash
npm install
```

Start server:

```bash
npm run dev
```

Go to `localhost:4000/ping` to verify that the server is running.

## Database Configurations

If you need to update the schema, modify the `schema.primsa` file.
Then run the following command to update.

```bash
npx prisma migrate dev --name <migration_message>
```
