# Lost Ark Tools

Link: [http://ec2-3-142-99-145.us-east-2.compute.amazonaws.com/](http://ec2-3-142-99-145.us-east-2.compute.amazonaws.com/)

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
