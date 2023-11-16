# PostgreSQL with Docker and Knex.js Migrations

This guide outlines the steps to set up a PostgreSQL database using Docker, manage its schema with Knex.js migrations or db-migrations library migrations, and populate it with initial data via a migration.

## Prerequisites

Before you begin, make sure you have the following installed:
- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/)

## Getting Started

1. **Set Up Docker**

   Make sure docker-compose.yml is in the project root and configured for PostgreSQL.

   ```sh
   version: '3.1'

    services:
    db:
        image: postgres
        restart: always
        environment:
        POSTGRES_PASSWORD: example
        ports:
        - "5432:5432"
        volumes:
        - ./data:/var/lib/postgresql/data


2. **Start the PostgreSQL Container**

    Run the following command in the directory containing your docker-compose.yml file to start PostgreSQL:
    ```sh
   docker-compose up -d
    ```
   Verify that the container is running with docker-compose ps or docker ps.

3. **Install Knex.js and PostgreSQL Client**
    
   ```sh
   npm install knex pg
   ```

4. **Initialize Knex.js**

    ```sh
   npx knex init
   ```
   This will create a `knexfile.js` which you'll configure in the next step.


5. **Configure Database Connection**

    Edit `knexfile.js` to set up the connection details for your PostgreSQL database.

    ```js
    // knexfile.js

    module.exports = {
        development: {
            client: 'pg',
            connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'example',
            database: 'postgres'
            },
            migrations: {
            directory: './migrations'
            }
        }
    };
    ```

6. **Create a Migration for Schema**

    Create a new migration file for defining the table schema with knex.js:
    ```sh
    npx knex migrate:make create_test_table
    ```

    Define the schema in the generated migration file in the migrations directory.
    ```js
    // Example schema definition
    exports.up = function(knex) {
    return knex.schema.createTable('test_table', function(table) {
        table.increments('id');
        table.string('name');
        // ... other fields ...
    });
    };

    exports.down = function(knex) {
    return knex.schema.dropTable('test_table');
    };
    ```

7. **Run Migrations**

    For knex.js, apply the migrations to create your table schema in the database:
    ```sh
    npx knex migrate:latest
    ```


8. **Create a Migration for Data Population**

    Create a separate migration for populating data:
    ```sh
    npx knex migrate:make populate_test_table
    ```

    Add data insertion logic in the migration file:
    ```js
    // Example data population
    exports.up = function(knex) {
    return knex('test_table').insert([
        { name: 'Alice' },
        { name: 'Bob' },
        // ... additional entries ...
    ]);
    };

    exports.down = function(knex) {
    return knex('test_table')
        .where('name', 'Alice')
        .orWhere('name', 'Bob')
        // ... additional entries ...
        .del();
    };
    ```

9. **Run Data Population Migration**
    Execute the migration to populate the data with knex.js:
    ```sh
    npx knex migrate:latest
    ```
10. **Revert the migration (if needed)**
    If you need to revert the migration (for instance, during testing or rollback), use the down command:
    ```sh
    npx knex migrate:rollback
    ```
    

