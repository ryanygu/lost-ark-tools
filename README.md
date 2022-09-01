# Lost Ark Tools

Link: [http://3.22.163.215/account/login](http://3.22.163.215/account/login)

Currently using a mock SMTP service via `ethereal.email`, so emails will not actually be sent out but will be displayed in the fake inbox.

For now, please log in with:
```
username: user1@example.com
password: test123
```

Will be able to do a live demo of user registration and an admin account upon request.

## Details

This is a MERN stack app hosted on AWS EC2 with an Ubuntu server with NGINX.

Major features:
- Email signup and verification
- JWT authentication with browser cookie based refreshing
- RESTful API
- Role based access control (Admin, User, etc.)


See the READMEs in `/frontend` and `/backend` for more details.
