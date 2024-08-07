## Installation

```bash
$ npm install
```
## Create SSL keys

```bash
# Create folder cert
$ mkdir -p cert

# Generate a private key
$ openssl genrsa -out ./cert/key.pem

# Generate a Certificate Signing Request (CSR)
$ openssl req -new -key ./cert/key.pem -out ./cert/csr.pem

#Generate a self-signed certificate
$ openssl x509 -req -days 365 -in ./cert/csr.pem -signkey ./cert/key.pem -out ./cert/cert.pem

```
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
