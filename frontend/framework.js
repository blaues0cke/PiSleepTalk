// 
// This file is part of PiSleepTalk.
//  Learn more at: https://github.com/blaues0cke/PiSleepTalk
// 
// Author:  Thomas Kekeisen <pisleeptalk@tk.ca.kekeisen.it>
// License: This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
//          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
//

this.alphanumeric = function (input) {  
	// Thanks to
	// * http://www.w3resource.com/javascript/form/letters-numbers-field.php
	var letterNumber = /^[0-9a-zA-Z]+$/;

	return input.match(letterNumber);
}; 