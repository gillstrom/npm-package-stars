'use strict';
var got = require('got');
var Promise = require('pinkie-promise');

function fetch(pkg, users) {
	var url = 'http://registry.npmjs.org/' + pkg;

	return got(url, {json: true}).then(function (res) {
		var ret = Object.keys(res.body.users || {});

		if (users) {
			return ret;
		}

		return ret.length;
	});
}

module.exports = function (pkg) {
	if (typeof pkg !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	return fetch(pkg);
};

module.exports.users = function (pkg) {
	if (typeof pkg !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	return fetch(pkg, true);
};
