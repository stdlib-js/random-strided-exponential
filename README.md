<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Exponential Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Fill a strided array with pseudorandom numbers drawn from an [exponential][@stdlib/random/base/exponential] distribution.



<section class="usage">

## Usage

```javascript
import exponential from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-exponential@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-exponential@esm/index.mjs';
```

#### exponential( N, lambda, sl, out, so )

Fills a strided array with pseudorandom numbers drawn from an [exponential][@stdlib/random/base/exponential] distribution.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
exponential( out.length, [ 2.0 ], 0, out, 1 );
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **lambda**: rate parameter.
-   **sl**: index increment for `lambda`.
-   **out**: output array.
-   **so**: index increment for `out`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to access every other value in `out`,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

exponential( 3, [ 2.0 ], 0, out, 2 );
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

// Initial array:
var lambda0 = new Float64Array( [ 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ] );

// Create offset view:
var lambda1 = new Float64Array( lambda0.buffer, lambda0.BYTES_PER_ELEMENT*3 ); // start at 4th element

// Create an output array:
var out = new Float64Array( 3 );

// Fill the output array:
exponential( out.length, lambda1, -1, out, 1 );
```

#### exponential.ndarray( N, lambda, sl, ol, out, so, oo )

Fills a strided array with pseudorandom numbers drawn from an [exponential][@stdlib/random/base/exponential] distribution using alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
exponential.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
```

The function has the following additional parameters:

-   **ol**: starting index for `lambda`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to access every other value in `out` starting from the second value,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

exponential.ndarray( 3, [ 2.0 ], 0, 0, out, 2, 1 );
```

#### exponential.factory( \[options] )

Returns a function for filling strided arrays with pseudorandom numbers drawn from an [exponential][@stdlib/random/base/exponential] distribution.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var random = exponential.factory();
// returns <Function>

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
random( out.length, [ 2.0 ], 0, out, 1 );
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the underlying pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that an underlying generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var opts = {
    'prng': minstd.normalized
};
var random = exponential.factory( opts );

var out = new Float64Array( 10 );
random( out.length, [ 2.0 ], 0, out, 1 );
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var opts = {
    'seed': 12345
};
var random = exponential.factory( opts );

var out = new Float64Array( 10 );
random( out.length, [ 2.0 ], 0, out, 1 );
```

* * *

#### random.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = exponential.PRNG;
// returns <Function>
```

#### exponential.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var seed = exponential.seed;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var random = exponential.factory({
    'prng': minstd
});
// returns <Function>

var seed = random.seed;
// returns null
```

#### exponential.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var len = exponential.seedLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var random = exponential.factory({
    'prng': minstd
});
// returns <Function>

var len = random.seedLength;
// returns null
```

#### exponential.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var state = exponential.state;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var random = exponential.factory({
    'prng': minstd
});
// returns <Function>

var state = random.state;
// returns null
```

#### exponential.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var len = exponential.stateLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var random = exponential.factory({
    'prng': minstd
});
// returns <Function>

var len = random.stateLength;
// returns null
```

#### exponential.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var sz = exponential.byteLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var random = exponential.factory({
    'prng': minstd
});
// returns <Function>

var sz = random.byteLength;
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, both `exponential` and `exponential.ndarray` leave the output array unchanged.
-   Both `exponential` and `exponential.ndarray` support array-like objects having getter and setter accessors for array element access.

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@esm/index.mjs';
import zeroTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-zero-to@esm/index.mjs';
import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@esm/index.mjs';
import exponential from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-strided-exponential@esm/index.mjs';

// Specify a PRNG seed:
var opts = {
    'seed': 1234
};

// Create a seeded PRNG:
var rand1 = exponential.factory( opts );

// Create an array:
var x1 = zeros( 10, 'float64' );

// Fill the array with pseudorandom numbers:
rand1( x1.length, [ 2.0 ], 0, x1, 1 );

// Create another function for filling strided arrays:
var rand2 = exponential.factory( opts );
// returns <Function>

// Create a second array:
var x2 = zeros( 10, 'generic' );

// Fill the array with the same pseudorandom numbers:
rand2( x2.length, [ 2.0 ], 0, x2, 1 );

// Create a list of indices:
var idx = zeroTo( x1.length, 'generic' );

// Print the array contents:
logEach( 'x1[%d] = %.2f; x2[%d] = %.2f', idx, x1, idx, x2 );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-strided-exponential.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-strided-exponential

[test-image]: https://github.com/stdlib-js/random-strided-exponential/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-strided-exponential/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-strided-exponential/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-strided-exponential?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-strided-exponential.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-strided-exponential/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-strided-exponential/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-strided-exponential/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-strided-exponential/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-strided-exponential/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-strided-exponential/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-strided-exponential/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-strided-exponential/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-strided-exponential/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/random/base/exponential]: https://github.com/stdlib-js/random-base-exponential/tree/esm

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/esm

</section>

<!-- /.links -->
