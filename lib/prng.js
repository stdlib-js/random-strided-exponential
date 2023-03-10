/**
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

'use strict';

// MODULES //

var isAccessorArray = require( '@stdlib/array-base-assert-is-accessor-array' );
var random = require( '@stdlib/random-base-exponential' );


// MAIN //

/**
* Returns a function for generating pseudorandom numbers.
*
* ## Notes
*
* -   The returned object has the following properties:
*
*     -   **arity**: number of function parameters.
*     -   **fcn**: function for generating pseudorandom numbers.
*
* @private
* @param {Collection} x - first parameter
* @param {integer} sx - `x` stride length
* @param {NonNegativeInteger} ox - starting `x` index
* @param {boolean} hasOptions - boolean indicating whether to process an options argument
* @param {(void|Options)} options - function options
* @returns {Object} function object
*/
function clbk( x, sx, ox, hasOptions, options ) {
	var out;
	var v1;

	out = {
		'arity': 0,
		'fcn': null
	};
	if ( hasOptions ) {
		if ( sx === 0 ) {
			if ( isAccessorArray( x ) ) {
				v1 = x.get( ox );
			} else {
				v1 = x[ ox ];
			}
			out.fcn = random.factory( v1, options );
			return out;
		}
		out.fcn = random.factory( options );
	} else {
		out.fcn = random;
	}
	out.arity += 1;
	return out;
}


// EXPORTS //

module.exports = clbk;
