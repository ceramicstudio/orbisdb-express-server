# OrbisDB Express Server Demo

This directory contains an example server (using Express) that displays how OrbisDB can be packaged in a simple server and made available to different environments to process http requests.

## OrbisDB Studio

You can use the [OrbisDB Hosted Studio](https://studio.useorbis.com/) to get up and running easily with this demo. You always have the option to move over to a standalone instance after. 

## Getting started

To get up and running and start experimenting with this server:

1. Install the dependencies from the root of this directory:

```bash
npm install
```

2. Create a copy of the example environment file:

```bash
cp .env.example .env
```

We will fill in the corresponding values in the following steps

3. Create a private Ceramic seed you will use to perform write operations on Ceramic. This seed will be used by the OrbisDB SDK to instantiate a DID (Decentralized Identifier) that will appear as the sole controller of the content you write.

Invoke the following command to create one:

```bash
npm run generate
```

Copy the corresponding value from your server console log into your new `.env` file next to `CERAMIC_PRIVATE_KEY`.

4. After logging into the [Hosted OrbisDB Studio](https://studio.useorbis.com/) you will see relevant information on the right-hand side in a box called "Setup."

In your `.env` file, make the following assignments:

ENV_ID: (Value under "Environment ID" in the studio)
INSTANCE_URL: (Value under "OrbisDB Instance URL")
CERAMIC_URL: (Value under "Ceramic Node URL")

5. In the same page, set up a new context by clicking the blue `+ Add context` button. Copy the corresponding ID into your `.env` file and assign it to `CONTEXT_ID`.

6. Finally, go to the "Model builder" tab of your studio view and create a new model using the definition found in the [tables](data-models/tables.sql) file. Copy the corresponding ID and assign it to `TABLE_ID` IN YOUR `.env` file.

7. You are now ready to run the server! Run the following command in your terminal:

```bash
npm run dev
```

Your server is now accessible and running on local port 8080.

## License

Dual licensed under MIT and Apache 2
