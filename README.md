# The Meatball Stoppe: Nextjs App

##### Version 5: [E. Stanley Jones](https://en.wikipedia.org/wiki/E._Stanley_Jones)

The app repo for themeatballstoppe.com. If you're in the Orlando area, give us a visit! [YELP](https://www.yelp.com/biz/the-meatball-stoppe-orlando-2) - [Google Maps](https://goo.gl/maps/zQhgK1nnauw)

## Technologies used

- React (Nextjs)
- Styled-components
- Google Maps api
- Facebook api
- Stripe api + online ordering
- Firebase functions + hosting
- Github actions
- Typescript
- Mobx

### How to dev locally

Frontend: yarn dev (from app/)
Backend: yarn serve (from functions/)

### Build-time rendering

- Increasingly inspired by [JAM stack](https://jamstack.org/). Pre-rendered, statically served content + serverless cloud functions for backend/routes.

### Update from v4

- Migrated from create-react-app to Nextjs
- Partially adopted Typescript
- A ton of cleanup

### Update from v3

- Moved from front-end + backend expressjs in Heroku to only front-end app with serverless cloud functions with Firebase (+hosting).

### Update from v2.2

- Migrated from Angular 4 to React
- New Menu design (pinterest-like)
- Guy Fieri feature on Media page
- Central location for menu data
- Better responsive layouts
