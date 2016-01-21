# npm-package-stars [![Build Status](https://travis-ci.org/gillstrom/npm-package-stars.svg?branch=master)](https://travis-ci.org/gillstrom/npm-package-stars)

> Get the stars of a npm package


## Install

```
$ npm install --save npm-package-stars
```


## Usage

```js
const npmPackageStars = require('npm-package-stars');

npmPackageStars('chalk').then(stars => {
	console.log(stars);
	//=> 329
});

npmPackageStars.users('chalk').then(users => {
	console.log(users);
	//=> ['passy', 'michaelsbradleyjr', 'jamescostian', ...]
});
```


## API

### npmPackageStars(package)

Returns a promise that resolves into the number of stars.

#### package

Type: `string`

Package to fetch stars from.

### .users(package)

Returns a promise that resolves into an array of users starring the package.

#### package

Type: `string`

Package to fetch users starring the package from.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
