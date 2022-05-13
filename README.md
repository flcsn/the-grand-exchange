# The Grand Exchange

Buy and sell products with others in this e-commerce website.


## Getting Started

Install project dependencies using the command:

```
npm install
```

Run the app on your local machine:

```
npm start
```


## Key Features (non-users)

### 1. Search for products by name
![Search for products by name](https://user-images.githubusercontent.com/73377890/168251472-baf7305f-8294-4c07-a88c-19c434d70332.png)

### 2. Buy products
![Buy products](https://user-images.githubusercontent.com/73377890/168251479-012f2c29-6fc1-4a11-9da9-960beb6d1c75.png)


## Key Features (users only)

### 3. Add funds to your wallet
![Add funds to your wallet](https://user-images.githubusercontent.com/73377890/168251002-54940b9e-1b47-4e25-937c-00d0e8ee44a3.png)

### 4. Add products to sell
*5 MB limit for images*
![Add products to sell](https://user-images.githubusercontent.com/73377890/168251019-fc312c6b-7cf2-4f7e-a278-a5d6c43879b0.png)

### 5. Take action (View/Edit/Delete) from your list of products
![Take action (View/Edit/Delete) from your list of products](https://user-images.githubusercontent.com/73377890/168251036-be1901a7-545f-4b3b-8d02-62790c5018db.png)


## Known Issues

* Amount displayed as the user's funds is sometimes inaccurate
  - Changes will be reflected in real-time when buying products or adding funds to the wallet
  - However, if another person purchases the user's products, the money gained from that transaction will only appear in the user's wallet when the user logs in again.


## Technologies Used (Frontend)

* HTML
* CSS
* Node.js
* React
* [axios](https://github.com/axios/axios) - handles communication with the server
* [redux](https://github.com/reduxjs/redux) - makes state management simpler in larger applications
* [redux-thunk](https://github.com/reduxjs/redux-thunk) - allows for more flexible redux methods
* [react-router](https://github.com/remix-run/react-router) - manages navigation between views
* [ESLint](https://eslint.org/) - a linter which helps with writing cleaner code


## Technologies Used (Backend)

* Node.js
* Express
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - enables user token authentication and authorization
* [bcrypt](https://github.com/kelektiv/node.bcrypt.js/) - manages password hashing and verification
* [mongoose](https://github.com/Automattic/mongoose) - handles creation, access, and alteration of data within MongoDB
* [multer](https://github.com/expressjs/multer) - allows reading of image files in submitted forms for storage in the backend
* [helmet](https://github.com/helmetjs/helmet) - sets some HTTP headers for some additional security
* [ESLint](https://eslint.org/) - a linter which helps with writing cleaner code


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
