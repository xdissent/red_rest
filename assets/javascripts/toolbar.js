/* ***** BEGIN LICENSE BLOCK *****
 * This file is part of DotClear.
 * Copyright (c) 2005 Nicolas Martin & Olivier Meunier and contributors. All
 * rights reserved.
 *
 * DotClear is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * DotClear is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with DotClear; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 *
 * ***** END LICENSE BLOCK *****
*/

/* Modified by Greg Thornton for reStructuredText formatting */

// Helper
jsToolBar.prototype.insertAtCaret = function(insert) {
    this.textarea.focus();
    
    var orig = this.textarea.value,
        start;
    
    if (typeof(document["selection"]) != "undefined") {
        alert('Not yet supported in IE.');
    } else if (typeof(this.textarea["setSelectionRange"]) != "undefined") {
        start = this.textarea.selectionStart;
        this.textarea.value = orig.substring(0, start) + insert + orig.substring(start);
        this.textarea.selectionStart = this.textarea.selectionEnd = start;
    }
}

// strong
jsToolBar.prototype.elements.strong = {
	type: 'button',
	title: 'Strong',
	fn: {
		wiki: function() { this.singleTag('**') }
	}
}

// em
jsToolBar.prototype.elements.em = {
	type: 'button',
	title: 'Emphasis',
	fn: {
		wiki: function() { this.singleTag("*") }
	}
}

// code
jsToolBar.prototype.elements.literal = {
	type: 'button',
	title: 'Literal',
	fn: {
		wiki: function() { this.singleTag('``') }
	}
}

// spacer
jsToolBar.prototype.elements.space1 = {type: 'space'}

// headings
jsToolBar.prototype.elements.h1 = {
	type: 'button',
	title: 'Heading 1',
	fn: {
		wiki: function() { 
		  this.encloseLineSelection('', '',function(str) {
            return str + "\n" + '='.times(str.length);
		  });
		}
	}
}
jsToolBar.prototype.elements.h2 = {
	type: 'button',
	title: 'Heading 2',
	fn: {
		wiki: function() { 
		  this.encloseLineSelection('', '',function(str) {
		    return str + "\n" + '-'.times(str.length);
		  });
		}
	}
}
jsToolBar.prototype.elements.h3 = {
	type: 'button',
	title: 'Heading 3',
	fn: {
		wiki: function() { 
		  this.encloseLineSelection('', '',function(str) {
		    return str + "\n" + '~'.times(str.length);
		  });
		}
	}
}

// spacer
jsToolBar.prototype.elements.space2 = {type: 'space'}

// ul
jsToolBar.prototype.elements.ul = {
	type: 'button',
	title: 'Unordered list',
	fn: {
		wiki: function() {
			this.encloseLineSelection('','',function(str) {
				str = str.replace(/\r/g,'');
				return str.replace(/(\n|^)[#-]?\s*/g,"$1* ");
			});
		}
	}
}

// ol
jsToolBar.prototype.elements.ol = {
	type: 'button',
	title: 'Ordered list',
	fn: {
		wiki: function() {
			this.encloseLineSelection('','',function(str) {
				str = str.replace(/\r/g,'');
				return str.replace(/(\n|^)[*-]?\s*/g,"$1# ");
			});
		}
	}
}

// spacer
jsToolBar.prototype.elements.space3 = {type: 'space'}

// bq
jsToolBar.prototype.elements.bq = {
	type: 'button',
	title: 'Quote',
	fn: {
		wiki: function() {
			this.encloseLineSelection('    ', '');
		}
	}
}

// pre
jsToolBar.prototype.elements.code = {
	type: 'button',
	title: 'Source Code',
	fn: {
		wiki: function() { this.encloseLineSelection("\n\n.. sourcecode::\n\n", "\n") }
	}
}

// spacer
jsToolBar.prototype.elements.space4 = {type: 'space'}

// wiki page
jsToolBar.prototype.elements.link = {
	type: 'button',
	title: 'Wiki link',
	fn: {
		wiki: function() { this.encloseSelection("[[", "]]") }
	}
}
// image
jsToolBar.prototype.elements.img = {
	type: 'button',
	title: 'Image',
	fn: {
		wiki: function() { this.encloseSelection("\n\n.. image:: ", "\n\n") }
	}
}