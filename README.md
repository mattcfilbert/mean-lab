# MEAN Lab - Example Solution #1

This solution is an extension of the Angular Superheroes lab. It includes a back-end that uses Express and Mongoose to work
with a MongoDB database. It also uses the Marvel API to populate seed data. As the Marvel API requires registered keys to
communicate with it, this app reads API keys from environment variables (see `db/db_utils.js`). If you choose to set this
project up locally, you will need to get registered API keys from the [Marvel Developer Portal](https://developer.marvel.com/).

In order to set an environment variable in the current shell (only lasts until you close the terminal window):
```bash
export VARIABLE_NAME='value'
```


