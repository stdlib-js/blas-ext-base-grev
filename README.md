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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Reverse a strided array in-place.



<section class="usage">

## Usage

To use in Observable,

```javascript
grev = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-grev@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var grev = require( 'path/to/vendor/umd/blas-ext-base-grev/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-grev@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.grev;
})();
</script>
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
-   **x**: input array.
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
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/complex64`][@stdlib/array/complex64]).
-   Where possible, one should "reverse" a strided array by negating its stride, which is an `O(1)` operation, in contrast to performing an in-place reversal, which is `O(N)`. However, in certain circumstances, this is not tenable, particularly when interfacing with libraries which assume and/or expect a specific memory layout (e.g., strided array elements arranged in memory in ascending order). In general, when working with strided arrays, only perform an in-place reversal when strictly necessary.
-   Depending on the environment, the typed versions ([`drev`][@stdlib/blas/ext/base/drev], [`srev`][@stdlib/blas/ext/base/srev], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript">
(function () {.factory;
var Float64Array = require( '@stdlib/array-float64' );
var gfillBy = require( '@stdlib/blas-ext-base-gfill-by' );
var grev = require( '@stdlib/blas-ext-base-grev' );

var x = gfillBy( 10, new Float64Array( 10 ), 1, discreteUniform( -100, 100 ) );
console.log( x );

grev( x.length, x, 1 );
console.log( x );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/ext/base/drev`][@stdlib/blas/ext/base/drev]</span><span class="delimiter">: </span><span class="description">reverse a double-precision floating-point strided array in-place.</span>
-   <span class="package-name">[`@stdlib/blas/ext/base/srev`][@stdlib/blas/ext/base/srev]</span><span class="delimiter">: </span><span class="description">reverse a single-precision floating-point strided array in-place.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-grev.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-grev

[test-image]: https://github.com/stdlib-js/blas-ext-base-grev/actions/workflows/test.yml/badge.svg?branch=v0.0.8
[test-url]: https://github.com/stdlib-js/blas-ext-base-grev/actions/workflows/test.yml?query=branch:v0.0.8

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-grev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-grev?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-grev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-grev/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-grev/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-ext-base-grev/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-ext-base-grev/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-ext-base-grev/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-grev/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/umd

[@stdlib/blas/ext/base/drev]: https://github.com/stdlib-js/blas-ext-base-drev/tree/umd

[@stdlib/blas/ext/base/srev]: https://github.com/stdlib-js/blas-ext-base-srev/tree/umd

</section>

<!-- /.links -->
