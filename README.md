<h1 align="center">The NFT Social Hub - Project Portfolio 5</h1>
 
![GitHub contributors](https://img.shields.io/github/contributors/Chrisfaherty/ci-nft-social-hub?color=green&style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Chrisfaherty/ci-nft-social-hub?color=orange&style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/Chrisfaherty/ci-nft-social-hub?color=brown&style=for-the-badge)

## - By Christopher Faherty

### [View Live Website](https://ci-nft-social-hub.herokuapp.com/)

![ImageFrames of website](./docs/readme/)

## Table of Contents

- [About](#about)
- [Project Goals](#project-goals)
- [User Stories](#user-stories)
- [Design Choices](#design-choices)
  - [Colour Scheme](#colour-scheme)
  - [Fonts](#fonts)
  - [Wireframes](#wireframes)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Libraries, frameworks and dependencies](#libraries-frameworks-and-dependencies)
  - [Tools & Programs](#tools--programs)
- [Front-End](#front-end)
- [Back-End API](#back-end-api)
- [Features](#application-features-and-screenshots)
- [Future features / improvements](#future-features--improvements)
- [Validation](#validation)
- [Testing](#testing)
  - [Manual testing of user stories](#manual-testing-of-user-stories)
  - [Performing tests on various devices](#performing-tests)
  - [Browser compatibility](#browers-that-ive-tested-on)
- [Bugs](#bugs)
- [Configuring of App](#configuring-this-app)
- [Credits](#credits)

## About

The NFT Social Hub is place where current or future NFT holders no matter what type of NFT can join and shire information about their project. Users that create an account will be able to post, like, comment and follow other users to keep track of projects they are interested in.
This Hub is for all holders to share their thoughts and collaborate with each other.

## Project Goals

The goal of this project was to create a hub where NFT holders can join and share their projects and collaborate with each other. There is currently no site like this out there specific to NFTs where it is focused on the project and allowing users to find potential future projects they would like to follow.

Required functions that the social hub required:

1. Good user experience and a clear understanding of the user flow,
2. User engagement (posting, liking, disliking, commenting, following, subscribing),
3. User login authentication status,
4. Full CRUD functionality for posts, comments, likes, followers and profile data,
5. Profiles that could be personalised (images, bio),
6. Filtering posts by search functionality of data related to a post (title, user),
7. Like filtering by viewing all previously liked posts,
8. Feed filtering by viewing all followed user's posts,
9. Responsive site for desktop and mobile.

## User Stories

#### Navigation & Authentication (Project Goal # Covered: 1, 3, 8, 9)

1. As a user I can view a navbar from every page so that I can navigate easily between pages,
2. As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh,
3. As a user I can create a new account so that I can access all the features for signed up users,
4. As a user I can sign in to the app so that I can access functionality for logged in users,
5. As a user I can tell if I am logged in or not so that I can log in if I need to,
6. As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised,
7. As a logged out user I can see sign in and sign up options so that I can sign in/sign up,
8. As a user I can view user's avatars so that I can easily identify users of the application,

#### Posts (Project Goal # Covered:1, 2, 4, 6, 9 )

9. As a logged in user I can create posts to share my NFT projects with other users. 
10. As a user I can view the details of a single post so that I can learn more about it,
11. As a user I can like a post so that I can show my support for the posts that interest me,
12. As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content,
13. As a user I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in,
14. As a user I can view the posts I liked so that I can find the posts I enjoy the most,
15. As a user I can view content filtered by users I follow so that I can keep up to date with what they are posting about,
16. As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc,

#### Post Detail Page (Project Goal # Covered: 1, 4, 7, 9 )

17. As a user I can view the posts page so that I can read the comments about the post,
18. As a user I can edit my post title and description so that I can make corrections or update my post after it was created,
19. As a user I can add comments to a post so that I can share my thoughts about the post,
20. As a user I can see how long ago a comment was made so that I know how old a comment is,
21. As a user I can read comments on posts so that I can read what other users think about the posts,
22. As a user I can delete my comment so that I can control removal of my comment from the application,
23. As a user I can edit my comment so that I can fix or update my existing comment,
24. As a user I can like or dislike a post but not both together on the same post,

#### Profile Page (Project Goal # Covered: 1, 4, 5, 9  )

25. As a user I can view other users profiles so that I can see their posts and learn more about them,
26. As a user I can see a list of the most followed profiles so that I can see which profiles are popular,
27. As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them,
28. As a user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed,
29. As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them,
30. As a user I can edit my profile so that I can change my profile picture and bio,
31. As a user I can update my username and password so that I can change my display name and keep my profile secure

#### User Experience (Project Goal # Covered: 1, 2 )

32. As a site owner I want my site to flow smoothly so users can navigate it with out any issues,
33. As a site owner I want the user to be able to subscribe to my mailing list so I can reach out to them whenever I have any new features being released,
34. As a user I can view a no results found error page so that I know the page I am on has no content,
35. As a user I can send a message to the admin if i need assistance with any feature,

## Design Choices

### Colour Scheme

For the color scheme I was trying to go with a minimalistic style with different shades of blue. This made the project easy on the eye but also helped guide the users eye to the components that they were able to interact with. 

The color scheme used was created on Coolors

<img src="docs/readme/coolors-color-scheme.png">

### Fonts

The fonts used for this project were from Google Fonts. It was Source Serif Pro as it worked well with the project logo and and the theme of the project.

### Wireframes

- [Balsamiq Wireframes](https://balsamiq.com/) was used to generate the wirreframes for this project. Wireframes for both mobile and desktop views were created.

The Post, liked & Feed wireframes are the same. They will vary as different users like and follow different accounts.

- Home Page logged in Wireframe - [View](docs/readme/wireframe/home-page-logged-in-wireframe.png)

- Home Page logged out Wireframe - [View](docs/readme/wireframe/home-page-logged-out-wireframe.png)

- Post Wireframe - [View](docs/readme/wireframe/post-wireframe.png)

- Profile Wireframe - [View](docs/readme/wireframe/profile-wireframe.png)

- Feed Wireframe - [View](docs/readme/wireframe/feed-wireframe.png)

- Liked Wireframe - [View](docs/readme/wireframe/liked-wireframe.png)

- Sign in Wireframe - [View](docs/readme/wireframe/sign-in-wireframe.png)

- Sign up Wireframe - [View](docs/readme/wireframe/sign-up-wireframe.png)

- Contact Wireframe - [View](docs/readme/wireframe/contact-wireframe.png)

- Subscribe Wireframe - [View](docs/readme/wireframe/subscribe-wireframe.png)

- No Results Wireframe - [View](docs/readme/wireframe/no-result-wireframe.png)

## Technologies Used

### Languages

- React
- Javascript
- HTML
- CSS

### Libraries, frameworks and dependencies

- [Axios](https://axios-http.com/docs/intro) - Axios was used for promise-based HTTP requests. Justification: Axios was required to send and retrieve data from the User preventing Cross-origin resource sharing errors from occuring.
- [JWT](https://jwt.io/) - JWT library was used to decode JSON Web tokens. Justification: JWT is used to prevent unauthenticated users from making network requests to refresh their access token. This allowed for authentication tokens to be used in the browser to keep logged in users logged in until they logged out.
- [React 17](https://17.reactjs.org/) - JavaScript library for building user interfaces. Justification: This allowed for multiple encapsulated components to be used that manage their own state. React is extremely useful for this reason, and it also updates the data when data changes.
- [React-Bootstrap 1.6.3](https://react-bootstrap-v4.netlify.app/) - React bootstrap allowed for the rapid design of the website. Justification: Bootstrap allowe for a faster build time whilst making the project responsive and styled at the same time.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - This was used for dynamic routing. Justification: This this allowed the users to be directed to specific pages via url routers.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - React Infinite Scroll is a feature used to keep the user engaged Justification: This feature alows the user to continue scrolling and the posts will keep loading.

### Tools & Programs

- [Amiresponsive](https://ui.dev/amiresponsivecom/) was used to create the readme cover image,
- [Balsamiq](https://balsamiq.com/) used to create wireframes,
- [Cloudinary](https://cloudinary.com/) used to store static files,
- [Coolors](https://coolors.co/?home) used to generate the color scheme palette,
- [Formito](https://favicon.com) used to create the website's favicon,
- [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/) used for debugging of the code and checking site for responsiveness,
- [Google Fonts](https://fonts.google.com/) - Used for the fonts in the website,
- [GitHub](https://github.com/) used as a remote repository to store project code,
- [Git](https://git-scm.com/) used to commit and push my repository changes to github
- [Font Awesome](https://fontawesome.com/) - used for the icons in the website,
- [React Spinners](https://www.npmjs.com/package/react-spinners) - used to generate the loading spinners
- [Gitpod](https://www.gitpod.io/) - Was my chosen workspace to code this project
- [Heroku](https://dashboard.heroku.com/apps) was used to deploy my code live
- [ESLint](https://eslint.org/) used to validate JSX code
- [WC3 Validator](https://validator.w3.org/) was used to validate my HTML
- [Lighthouse Tools](https://developers.google.com/web/tools/lighthouse/) used to validate performance, accessibility, best practices and SEO of my website
- [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) was used to validate my CSS