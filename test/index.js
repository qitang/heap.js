var BinaryHeap = require('../lib/heap.js')


 
var assert = require('assert');

console.log(assert)

describe('Array', function() {
	var heap;
	beforeEach(function() {
	    heap = new BinaryHeap();
	});

	it('should return undefined when the heap is empty', function () {
	  assert.isUndefined(heap.pop(), 'no element');
	});
});