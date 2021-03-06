# 14 Model-View-Controller (MVC): Tech Blog

## My Task

My task this week was to build a CMS-style blog site where developers can publish their blog posts and comment on other developersâ€™ posts. This site was built from scratch and deployed to Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Table of Contents
1. [Technologies Used](#Technologies-Used)
2. [User Story](#User-Story)
3. [Acceptance Criteria](#Acceptance-Criteria)
4. [Mock Up](#Mock-Up)
5. [Usage](#Usage)
6. [Contact](#Contact)
7. [License](#License)


## Technologies Used
```
1. JavaScript
2. Express.js
3. Node.js
4. MySQL2 package
5. Sequelize package
6. Handlebars package
7. Dotenv package
8. Bycrypt package
9. Express-session package
10. Connect-session-sequelize package
11. MVC structure
```

## User Story

```md
AS A developer who writes about technology,
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions.
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site:
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creatorâ€™s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creatorâ€™s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Mock-Up
##### UPDATE UPDATE UPDATE
The following link leads to the GitHub repository for this app:
![GitHub Link](https://github.com/crsmith01/mvc-tech-blog)

The following link leads to the deployed application on Heroku:
![Heroku Link](_____________)

## Usage
To run the app locally, follow these steps:
1. Install the necessary dependencies. Navigate to the repository's root directory and run the following: 
```
npm install
```
2. Create a .env file in the root directory. It should contain the following information:
```
DB_NAME=your database name
DB_USER=your username (often 'root')
DB_PASSWORD=your password
```
3. Create your own database by running the following query in MySQL Workbench:
```
DROP DATABASE IF EXISTS techBlog_db;
CREATE DATABASE techBlog_db;
```
4. To seed the database, enter the following:
```
node seeds/node
```
5. To start the server, enter the following:
```
npm start
```

## Contact
If you have any questions about the repo, contact me at [crsmith01](https://github.com/crsmith01).


## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Copyright 2021 Catherine Smith

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.