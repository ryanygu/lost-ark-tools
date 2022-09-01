# Node + MongoDB Backend

## Features

---

- Email signup and verification
- JWT authentication with refresh tokens
  - The JWT access token has a 15 minute expiry time that auto-refreshes if a refresh token exists (stored in a cookie, lasts for 7 days)
- Role based authenticaion (Admin, User)
- Forgot/reset password functionality
- Account management routes (CRUD) with role based access control
- `Swagger UI` API documentation route
  - To preview the `Swagger UI` documentation without running the API, copy and paste `swagger.yaml` into the swagger editor at https://editor.swagger.io

## Design choices

---

Security
- HTTP Only cookies are used for increased security because they are not accessible to client-side JavaScript with prevents cross-site scripting (XSS)
  - The refresh token (HTTP Only cookie) can only be used to fetch a new JWT token from the `/accounts/refresh-token` route which prevents cross-site request forgery (CSRF)
- Each time a refresh token is used to generate a new JWT token, the refresh token is revoked and replaced by a new refresh token
  - This "Refresh Token Rotation" increases securtiy by reducing the lifetime of refresh tokens, which makes it less likely that a compromised token will be valid


## Setup

---

- Email SMTP settings must be set in the `config.json` file for emails to work correctly
  - You can create a free test account at https://ethereal.email/ and copy the options below the title "Nodemailer configuration"
- 

## Running the app locally

---

```
cd frontend
npm install
npm start
```

## Acknowledgements

Boilerplate from [here](https://jasonwatmore.com/).
