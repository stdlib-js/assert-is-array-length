/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/**
* Tests if a value is a valid array length.
*
* ## Notes
*
* -   A valid length property for an Array instance is any integer value on the interval `[0, 2^32-1]`.
*
* @param value - value to test
* @returns boolean indicating if a value is a valid array length
*
* @example
* var bool = isArrayLength( 3 );
* // returns true
*
* @example
* var bool = isArrayLength( 3.14 );
* // returns false
*/
declare function isArrayLength( value: any ): boolean;


// EXPORTS //

export = isArrayLength;