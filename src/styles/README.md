# About 

mPro is a code-generator and build system for full-stack JavaScript apps. Its biography, dependencies, basic npm commands, and other goodies can be found in the [documentation for Maestro](http://maestrodocs.com). mPro is based on Maestro, with the added benefits of some extra code scaffolding and, most importantly, a command-line tool to quickly build out data models and REST API routes.

# CLI

The core feature of mPro is a simple command-line tool to create back-end routes for a new data model. Basically, entering `yo mpro:makeModel hat` will make a schema for a hat, create CRUD routes for hats, and hook the schema and routes up to the node server and to each other. The key files it creates can be found in `/db/schemas` and `/routes/api`. You'll probably want to embellish the schema a bit, but after that you're free to start writing front-end functionality for this model.