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
