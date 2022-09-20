![Hero](https://raw.githubusercontent.com/ryanygu/lost-ark-tools/master/.github/imgs/hero.png)

# Lost Ark Tools

Link: [http://ec2-3-142-99-145.us-east-2.compute.amazonaws.com/](http://ec2-3-142-99-145.us-east-2.compute.amazonaws.com/)

Pre-generated test account:
```
username: user1@example.com
password: test123
```

Lost Ark Tools was created as a way for me to get more familiar with designing applications from the ground up, and seeing how the different pieces fall in place. I have learned a lot from the different design choices I have made (both frontend and backend) and there are still features that I would like to explore in the future.

Note: Currently using a mock SMTP service via [Ethereal Email](http://ethereal.email) for quicker development. Emails for user registration will not actually be sent out but will be displayed in a virtual inbox. Will convert to a real SMTP service like [SendGrid](http://sendgrid.com) in the near future. Please use the provided login for now.


Will be able to do a live demo of user registration and an admin account upon request.


## Features

- Leaderboards
- Faceting practice and tools
  - Personal growth statistics
- Forums (in progress)
- Marketplace (in progress)

## Technical details


This is a MERN stack app hosted on AWS EC2 with an Ubuntu server with NGINX.

Major features:
- Email signup and verification
- Forgot password functionality
- JWT authentication with browser cookie based refreshing
- RESTful API
- Role based access control (Admin, User, etc.)

See the READMEs in `/frontend` and `/backend` for more details.

## Screenshots

![Faceting](https://raw.githubusercontent.com/ryanygu/lost-ark-tools/master/.github/imgs/faceting.png)

![Statistics](https://raw.githubusercontent.com/ryanygu/lost-ark-tools/master/.github/imgs/statistics.png)

![Leaderboards](https://raw.githubusercontent.com/ryanygu/lost-ark-tools/master/.github/imgs/leaderboards.png)

## Further work

- Redo authentication with an OAuth2 based provider like Auth0
- Refactor database to use a SQL based solution (MySQL + sequelize)
  - MongoDB was nice to get things up and running quickly, however, since there are so many features I am thinking about adding, a NoSQL solution is not the best way to go.
- Add a state management system like Redux Toolkit, or Zustand
  - Depending on how development goes, consider atomic models like Jotai
- Add a marketplace feature so I can implement a shopping cart and use Stripe for payments
- Finish configuring CI/CD pipeline
  - Automatic deployment after passing Jest unit tests
- Dockerize
- Set up SSL (Cloudflare or LetsEncrypt)
- Refactor from Bootstrap 5 to TailwindCSS