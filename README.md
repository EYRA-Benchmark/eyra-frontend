[![Build Status](https://travis-ci.org/EYRA-Benchmark/eyra-frontend.svg?branch=master)](https://travis-ci.org/EYRA-Benchmark/eyra-frontend)

This is the frontend for the [Eyra Benchmark Platform](https://www.eyrabenchmark.net).

# Development
## Requirements:
- node (at least version 8)
- yarn (``npm install -g yarn``)

Clone this repository, from the cloned directory install dependencies using ``yarn install``.

Then, start a development server using ``yarn start``. It should start running on `http://localhost:3000`.

# Build
Run `yarn build`.

# Run production
First `yarn build`, then run `yarn start:production`.

# Configuration
By default the [backend](https://www.github.com/EYRA-Benchmark/comic) running at `https://api.staging.eyrabenchmark.net/api/v1/` is used. This can be changed by setting the environmental variable
`EYRA_BACKEND_URL`.
