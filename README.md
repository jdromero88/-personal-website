# Personal Website
www.josedromero.com

Developing my personal website.

- React
- [Bulma.io](https://bulma.io/) CSS framework

# Quick start instructions
1- Clone this repo
2- Get into the repo folder `cd personal-website`
3- Install & start `npm i && npm start`

## Generate CSS
To generate the CSS file run `npm run css-build`

## Generate Sitemap
To generate the sitemap file run `npm run sitemap`

## Steps to build for production
- Clean files for a fresh start `gulp clean`
- Generate CSS `npm run css-build`
- Minified CSS `npm run css-nanofy` **removed for now because is causing problem when building*
- Generate Sitemap `npm run sitemap`
- Build React App `npm run build`

Now by running `npm run build-production` will be executing all the previous comand in order and will create a `build` folder. This folder you must use it for deployment. Everything that is inside this folder you must put it in the root folder of your hosting provider.

## Deploy to Bluehost or similar
Next, we need to modify our package.json file by adding the homepage field. This field is used by React to figure out the root URL in the built HTML file. In it, we will put the URL of our GitHub repository.

To deploy to bluehost use this:
```
{
  "name": "josedromero",
  "homepage": "https://josedromero.com",
  "version": "0.1.0",
}
```

## Deploy to GH Pages
To deploy in github pages update the package.json to this:
```
{
  "name": "personal-website",
  "homepage": "https://jdromero88.github.io/personal-website/",
}  
```
To deploy our application, type the following in the terminal:
`npm run deploy`