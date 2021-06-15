# Twitter Demo

This is a backend platform that demonstrates the simplest twitter functionalities: creating user, adding followers, creating/editing/deleting tweets, getting twitter feed, etc.
<br><br>
Technologies:

- Platform: Node Typescript
- API: Graphql
- Database: MongoDB
- Auth: Firebase

## Structure Summary

---

```
├── app
│   ├── index.ts
│   ├── tweets
│   │   ├── createTweet.ts
│   │   ├── deleteTweet.ts
│   │   ├── editTweet.ts
│   │   ├── getTweets.ts
│   │   └── index.ts
│   └── users
│       ├── addFollowing.ts
│       ├── createUser.ts
│       ├── getUser.ts
│       └── index.ts
├── auth
├── database
├── graphql
├── index.ts
├── store
│   ├── index.ts
│   ├── tweets.ts
│   └── users.ts
└── types
    ├── database.ts
    ├── index.ts
    ├── tweet.ts
    └── user.ts
```

`app`: holds all the core logic of the platform. Any modification or gathering data happens in these files
<br>
`graphql`: all api functionalities. Including resolvers, queries, mutations, typedefs are found in this folder
<br>
`store`: any interaction with the database. Including finding, inserting, updating, and deleting documents in mongo

## Setup

---

Requirements:

- Node >= 12

Additional Files

- `.env`
- `auth.json` (Firebase)

Steps:

1. Install node modules: `npm install`
2. Run nodemon: `npm start`
3. Go to `http://localhost:4000/graphql` to use graphql playground
4. Start tweeting :)

## API Summary

---

To see the full schema of all the queries and mutations, go to the docs tabs on the graphql playground

### User

- mutation `createUser`: Adds new user to firebase and database
- mutation `addFollowing`: Creates a following/follower relationship between users. Note: each user has a following and followers list, this denormalization of data is an optimization to shorten read times.
- query `getUser` : retrieves user from database, can query using one of the following `_id`, `phone`, or `email`

### Tweets

- mutation `createTweet`: Creates a tweet from the provided userId and message
- mutation `editTweet`: Edits the message in the tweet
- mutation `deleteTweet`: Marks the tweet as deleted in the database
- query: `getUsersTweet`: Gets all the tweets made with the provided userId
- query `getTwitterFeed`: Get all the tweets from accounts the user is following

![Alt Text](https://media.giphy.com/media/4NrjGJThT4vg82RRKj/source.gif)

## Next Steps

---

This platform is a over simplified demonstration of twitter built in a short amount of time. Here would be the next steps to get the platform more prepared for production:

1. Error Handling Improvements: The error in this platform are simply passed through the api. Try/catches on all db queries, more specific error message for edge case, ie trying to follow a user that does not exist.
2. Unit testing: A unit testing should be built for each mutation/query to ensure that it produces its expected output.
3. Using authenticated queries/mutation: Instead of using userId as an argument, created authenticated queries -- adds security and makes it easy for developers to get user from app context.
4. Image/attachment handling: Use aws s3 to store images/files, hold the links in the attachments element of each tweet document in mongo.
