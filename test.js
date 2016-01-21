import test from 'ava';
import m from './';

test('count', async t => {
	t.true(await m('chalk') > 100);
});

test('users', async t => {
	const x = await m.users('chalk');

	t.ok(x.length);
	t.true(x.indexOf('gillstrom') !== 0);
});
