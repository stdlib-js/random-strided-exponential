/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import * as random from '@stdlib/types/random';
import { Collection } from '@stdlib/types/object';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Pseudorandom number generator which generates uniformly distributed pseudorandom numbers.
	*/
	prng?: random.PRNG;

	/**
	* Pseudorandom number generator seed.
	*/
	seed?: random.PRNGSeedMT19937;

	/**
	* Pseudorandom number generator state.
	*/
	state?: random.PRNGStateMT19937;

	/**
	* Specifies whether to copy a provided pseudorandom number generator state (default: `true`).
	*/
	copy?: boolean;
}

/**
* Interface describing `exponential`.
*/
interface Routine {
	/**
	* Fills a strided array with pseudorandom numbers drawn from an exponential distribution.
	*
	* @param N - number of indexed elements
	* @param lambda - rate parameter
	* @param sl - `lambda` strided length
	* @param out - output array
	* @param so - `out` stride length
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* exponential( out.length, [ 2.0 ], 0, out, 1 );
	*/
	( N: number, lambda: Collection, sl: number, out: Collection, so: number, options?: Options ): Collection; // tslint:disable-line:max-line-length

	/**
	* Fills a strided array with pseudorandom numbers drawn from an exponential distribution using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param lambda - rate parameter
	* @param sl - `lambda` strided length
	* @param ol - starting index for `lambda`
	* @param out - output array
	* @param so - `out` stride length
	* @param oo - starting index for `out`
	* @param options - function options
	* @throws must provide valid distribution parameters
	* @throws must provide valid options
	* @throws must provide a valid state
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* // Create an array:
	* var out = new Float64Array( 10 );
	*
	* // Fill the array with pseudorandom numbers:
	* exponential.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
	*/
	ndarray( N: number, lambda: Collection, sl: number, ol: number, out: Collection, so: number, oo: number, options?: Options ): Collection; // tslint:disable-line:max-line-length
}

/**
* Fills a strided array with pseudorandom numbers drawn from an exponential distribution.
*
* @param N - number of indexed elements
* @param lambda - rate parameter
* @param sl - `lambda` strided length
* @param out - output array
* @param so - `out` stride length
* @param options - function options
* @throws must provide valid distribution parameters
* @throws must provide valid options
* @throws must provide a valid state
* @returns output array
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* exponential( out.length, [ 2.0 ], 0, out, 1 );
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
*
* // Create an array:
* var out = new Float64Array( 10 );
*
* // Fill the array with pseudorandom numbers:
* exponential.ndarray( out.length, [ 2.0 ], 0, 0, out, 1, 0 );
*/
declare var exponential: Routine;


// EXPORTS //

export = exponential;
