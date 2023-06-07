---
sidebar_position: 1
---

# Introduction


The Botanalytics API is organized around **[REST.](https://en.wikipedia.org/wiki/Representational_State_Transfer)** Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients. We support **[cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)**, allowing you to interact securely with our API from a client-side web application (though you should never expose your secret API token in any public website's client-side code). **[JSON](https://www.json.org/json-en.html)** is returned by all API responses, including errors, although our API libraries convert responses to appropriate language-specific objects.

Be sure to subscribe to Botanalytics's API announce mailing list to receive information on new additions and changes to Botanalytics's API and language libraries.

## Authentication

The Botanalytics API authentication is organized around **[JWT authentication.](https://jwt.io/introduction)**  Authenticate your account by including your JWT token in API requests. You can manage your API tokens for the each channel in the Project settings. Your JWT API token carry many privileges, so be sure to keep them secure! Do not share your JWT API token in publicly accessible areas such GitHub, client-side code, and so forth. All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

## Errors


Botanalytics uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the `2xx` range indicate success. Codes in the `4xx`  range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the `5xx` range indicate an error with Botanalytics's servers.


200, 201 `OK` Everything worked as expected (some API calls may return 201 instead).


400 `Bad Request` The request was unacceptable, often due to missing a required parameter.


401 `Unauthorized` You forgot to include your API token or it is wrong.


404 `Not Found` The requested resource doesn't exist.


## API libraries


Official libraries for the Botanalytics API are available in several languages such as **[Node.js](https://www.npmjs.com/package/botanalytics)** and **[Python.](https://pypi.python.org/pypi/botanalytics/)**

#### API Endpoint

**https://api.botanalytics.co/v2/**