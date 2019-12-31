# README #

### What is this repository for? ###

This is POC repo for NightwatchJS web automation using BDD and page object

### How do I get set up? ###

**1.** Assume that you have node installed.

**2.** Clone this repo

**3.** Access the folder

**4.** Copy environtment
```sh
$ cp env.sample .env
```

**5.** Install all dependencies:
```sh
$ npm ci
```

**6.** Run Selenium server
```
$ cd selenoid && docker-compose up -d
```

**7.** Run Nightwatch Web UI test:
```sh
$ npm run test-docker-chrome
```

**8.** Run Nightwatch Web UI report:
```sh
$ npm run report-chrome
```
