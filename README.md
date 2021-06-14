<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# grev

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Reverse a strided array in-place.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-grev
```

</section>

<section class="usage">

## Usage

```javascript
var grev = require( '@stdlib/blas-ext-base-grev' );
```

#### grev( N, x, stride )

Reverses a strided array `x` in-place.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

grev( x.length, x, 1 );
// x => [ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: index increment.

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to reverse every other element

```javascript
var floor = require( '@stdlib/math-base-special-floor' );

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
var N = floor( x.length / 2 );

grev( N, x, 2 );
// x => [ -1.0, 1.0, 4.0, -5.0, 3.0, 0.0, -2.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Reverse every other element...
grev( N, x1, 2 );
// x0 => <Float64Array>[ 1.0, -6.0, 3.0, -4.0, 5.0, -2.0 ]
```

#### grev.ndarray( N, x, stride, offset )

Reverses a strided array `x` in-place using alternative indexing semantics.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

grev.ndarray( x.length, x, 1, 0 );
// x => [ -3.0, -1.0, 0.0, 4.0, -5.0, 3.0, 1.0, -2.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

grev.ndarray( 3, x, 1, x.length-3 );
// x => [ 1.0, -2.0, 3.0, -6.0, 5.0, -4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   Where possible, one should "reverse" a strided array by negating its stride, which is an `O(1)` operation, in contrast to performing an in-place reversal, which is `O(N)`. However, in certain circumstances, this is not tenable, particularly when interfacing with libraries which assume and/or expect a specific memory layout (e.g., strided array elements arranged in memory in ascending order). In general, when working with strided arrays, only perform an in-place reversal when strictly necessary.
-   Depending on the environment, the typed versions ([`drev`][@stdlib/blas/ext/base/drev], [`srev`][@stdlib/blas/ext/base/srev], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math-base-special-round' );
var randu = require( '@stdlib/random-base-randu' );
var Float64Array = require( '@stdlib/array-float64' );
var grev = require( '@stdlib/blas-ext-base-grev' );

var rand;
var sign;
var x;
var i;

x = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    rand = round( randu()*100.0 );
    sign = randu();
    if ( sign < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    x[ i ] = sign * rand;
}
console.log( x );

grev( x.length, x, 1 );
console.log( x );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-grev.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-grev

[test-image]: https://github.com/stdlib-js/blas-ext-base-grev/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/blas-ext-base-grev/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-grev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-grev?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-grev
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-grev/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-grev/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/blas/ext/base/drev]: https://github.com/stdlib-js/blas-ext-base-drev

[@stdlib/blas/ext/base/srev]: https://github.com/stdlib-js/blas-ext-base-srev

</section>

<!-- /.links -->