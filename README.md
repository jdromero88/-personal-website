# Personal Website
www.josedromero.com

Developing my personal website.

- React
- [Bulma.io](https://bulma.io/) CSS framework

# Quick start instructions
1- Clone this repo
2- Get into the repo folder ```cd personal-website```
3- Install & start ```npm i && npm start```

## Generate CSS
To generate the CSS file run ```npm run css-build```

## Generate Sitemap
To generate the sitemap file run ```npm run sitemap```

## Steps to build for production
- Generate CSS ```npm run css-build```
- Minified CSS ```npm run css-nanofy```
- Generate Sitemap ```npm run sitemap```
- Build React App ```npm run build```

Now by running ```npm run build-production``` will be executing all the previous comand in order and will create a ```build``` folder. This folder you must use it for deployment.
