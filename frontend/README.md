# React Frontend

Boilerplate from [here](https://jasonwatmore.com/post/2020/04/22/react-email-sign-up-with-verification-authentication-forgot-password).


## Features

---

- Email signup and verification
- JWT authentication with refresh tokens
  - The JWT access token has a 15 minute expiry time that auto-refreshes if a refresh token exists (stored in a cookie, lasts for 7 days)
- Role based authenticaion (Admin, User)
- Forgot/reset password functionality
- Private Admin page

## Design choices

---

- `history.js` helper service is passed to `Router` instead of using `BrowserRouter` (which has history built in) because it allows us to access the history object outside of React components. An example is `logout()` in the `account.service.js`
- Uses an `RxJS` observable for the current user information, allowing 'push' notifications for user login/logouts, which simplifies the state management
- File structure
  - Features (large components) are grouped in folders (i.e. `account`, `admin`, or `home`)
  - Non-feature code that can be shared across multiple files are in folders prefixed with`_` (i.e. `_components`, `_helpers`, `_services`)
  - Each feature folder has `Index.jsx` so the whole feature can be imported (`import { App } from './app'`) without the typical extra `index.js` exporting file
  - This groups the code more logically and keeps the folder structure shallow, making it easier to see everything at a glance

## Running the app locally

---

```
cd frontend
npm install
npm start
```
