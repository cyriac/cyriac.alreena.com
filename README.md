# Wedding RSVP website via google forms

Create as many google forms you need for each events with your wedding.
Assign a passcode for each event and then share it with you family and friends.

[Demo](https://cyriac.alreena.com)

Use passcode: ```192619```

# Configuration

1. Set your website ```website_title```, ```description```, ```website_domain``` and ```codes``` in ```nuxt.config.json```
2. Create jsons config for each pass code in ```/static/rsvpcode/```. [Example](static/rsvpcode/192619.json)
3. Add cards for each event that you have configured under the [img folder](static/img/)


# Build setup

## install dependencies
```shell
$ npm install # Or yarn install
```

## serve with hot reload at localhost:3000
```shell
$ npm run dev
```

## generate static site
```shell
$ npm run generate
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cyriac/cyriac.alreena.com)
