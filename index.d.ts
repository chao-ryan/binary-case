// Type definitions for index.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace binaryCase{
	// binaryCase.iterator.!1
	
	/**
	 * 
	 */
	interface Iterator1 {
				
		/**
		 * 
		 */
		startIndex : number;
	}
}
declare namespace binaryCase{
	// binaryCase.iterator.!ret
	
	/**
	 * 
	 */
	interface IteratorRet {
				
		/**
		 * 
		 * @return  
		 */
		next(): binaryCase.IteratorRet.NextRet;
	}
}
declare namespace binaryCase.IteratorRet{
	// binaryCase.iterator.!ret.next.!ret
	
	/**
	 * 
	 */
	interface NextRet {
				
		/**
		 * 
		 */
		done : boolean;
				
		/**
		 * 
		 */
		value : string;
	}
}
declare namespace binaryCase{
	// binaryCase.variations.!ret
	type VariationsRet = Array<string>;
}
// binaryCase.!2

/**
 * 
 */
declare interface 2 {
		
	/**
	 * 
	 */
	allowOverflow : boolean;
}

/**
 * Toggle the case of a string based on the number value passed in.
 * @param {string} string
 * @param {number} number
 * @param {object} [options={allowOverflow: true}]
 * @returns {string|boolean}
 * @param string 
 * @param number 
 * @param options 
 * @return  
 */
declare function binaryCase(string : string, number : number, options : 2): boolean;
/**
 * Toggle the case of a string based on the number value passed in.
 * @param {string} string
 * @param {number} number
 * @param {object} [options={allowOverflow: true}]
 * @returns {string|boolean}
 */
declare function binaryCase();

/**
 * 
 */
declare namespace binaryCase{
		
	/**
	 * 
	 * @param string 
	 * @param options 
	 * @return  
	 */
	function iterator(string : any, options : binaryCase.Iterator1): binaryCase.IteratorRet;
		
	/**
	 * Get the maximum number that can be used before causing overflow.
	 * @param {string} string
	 * @returns {number}
	 * @param string 
	 * @return  
	 */
	function maxNumber(string : string): number;
		
	/**
	 * Get an array of all possible variations.
	 * @param {string} string
	 * @returns {string[]}
	 * @param string 
	 * @return  
	 */
	function variations(string : string): binaryCase.VariationsRet;	
	/**
	 * Get an array of all possible variations.
	 * @param {string} string
	 * @returns {string[]}
	 */
	function variations();
}

/**
 * A performance improved method for acquiring the binary case, provided by Blake Embrey with very minor modification by James Speirs.
 * @author Blake Embrey | https://github.com/blakeembrey
 * @author James Speirs | https://github.com/gi60s
 * @param {string} str
 * @param {number} val
 * @returns {string}
 * @param str 
 * @param val 
 * @return  
 */
declare function getBinaryCase(str : string, val : number): string;
