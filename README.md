<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# isArrayLength

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a valid array length.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-array-length
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var isArrayLength = require( '@stdlib/assert-is-array-length' );
```

#### isArrayLength( value )

Tests if a value is a valid `array` length.

```javascript
var bool = isArrayLength( 5 );
// returns true

bool = isArrayLength( -1 );
// returns false

bool = isArrayLength( 2.0e200 );
// returns false

bool = isArrayLength( 3.14 );
// returns false

bool = isArrayLength( null );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A valid `length` property for an [`Array`][mdn-array] is any integer value on the interval `[0, 2^32-1]`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isArrayLength = require( '@stdlib/assert-is-array-length' );

var bool = isArrayLength( 5 );
// returns true

bool = isArrayLength( 0 );
// returns true

bool = isArrayLength( 2.0e200 );
// returns false

bool = isArrayLength( 5.256 );
// returns false

bool = isArrayLength( 1.0/0.0 );
// returns false

bool = isArrayLength( -1.0/0.0 );
// returns false

bool = isArrayLength( NaN );
// returns false

bool = isArrayLength( '5' );
// returns false

bool = isArrayLength( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-array-length.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-array-length

[test-image]: https://github.com/stdlib-js/assert-is-array-length/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-array-length/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-array-length/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-array-length?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-array-length.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-array-length/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-array-length/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-array-length/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-array-length/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-array-length/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-array-length/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert-is-array

<!-- </related-links> -->

</section>

<!-- /.links -->
