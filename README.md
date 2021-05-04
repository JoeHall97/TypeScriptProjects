# Typescript Projects

This is a series of different projects done as part of a [Udemy course](https://www.udemy.com/course/typescript-the-complete-developers-guide).

## Maps

A web app that uses google maps to place randomly generate users and companies, onto a map.

To run the app, first you'll need to provide a google maps api key, placing it in index.html.
You'll then need to install parcel, which can be done using the following command:

```
npm i -g parcel
```

then run:

```
# change into the directory
cd Maps/
# install npm packages
npm i
# start the parcel local server
parcel index.html
```

## Sort

A node app that can sort collections (arrays and linked lists) of numbers and characters.

To run:

```
# install typescript globally
npm i -g typescript
# change into the directory
cd Sort/
# install npm packages
npm i
# build and run src/index.ts in watch mode
npm run start
```

## Stats

A node app that reads in a csv of football matches and prints out a report to the terminal and to a html file. The app has implementations for both inheritance and composition, but uses composition by default.

To run:

```
# install typescript globally
npm i -g typescript
# change into the directory
cd Stats/
# install npm packages
npm i
# build and run src/index.ts in watch mode
npm run start
```

## React, Redux, and Typescript (rrts)

A react and redux app that fetches and displays some test JSON data in a list. Once the data is fetched, items can be removed from the list by clicking on them.

To run:

```
# change into the directory
cd rrts/
# install npm packages
npm i
# build and run src/index.ts in watch mode
npm run start
```

## Express Server

A node app that uses express. It has a simple user login flow, with user authentication using cookies. To login, use the email `me@me.com` and the password `123`.

To run:

```
# install typescript globally
npm i -g typescript
# change into the directory
cd server/
# install npm packages
npm i
# build and run src/index.ts in watch mode
npm run start
```
