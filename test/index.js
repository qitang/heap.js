var BinaryHeap = require('../lib/heap.js')

 
var assert = require('chai').assert;


describe('min heap', function() {
	var heap
	beforeEach(function() {
	     heap = new BinaryHeap();
	});

	it('peak should return undefined when the queue is empty', function () {
	  assert.isUndefined(heap.peak());
	});

	it('peak should return minimium number', function () {
	   [2,43,50,-43,-33, -1].forEach(function(v){
	   		heap.push(v)
	   })
	   assert.equal(-43 , heap.peak())
	});

	it('pop should remove minimium number', function () {
	   [2,43,50,-43,-33, -1].forEach(function(v){
	   		heap.push(v)
	   })
	   assert.equal(-43 , heap.pop())
	   assert.equal(-33 , heap.pop())
	});

	it('size should return number of elements', function () {
	   [2,43,50,-43,-33, -1].forEach(function(v){
	   		heap.push(v)
	   })
	   assert.equal(6 , heap.size())
	});

});


describe('max heap', function() {
	var heap
	beforeEach(function() {
	     heap = new BinaryHeap(function(a,b){
	     	if(a > b) return -1;
	     	if(a < b) return 1;
	     	return 0;
	     });
	});

	it('peak should return undefined when the queue is empty', function () {
	  assert.isUndefined(heap.peak());
	});

	it('peak should return minimium number', function () {
	   [2,43,50,-43,-33, -1].forEach(function(v){
	   		heap.push(v)
	   })
	   assert.equal(50 , heap.peak())
	});

	it('pop should remove maximium number', function () {
	   [2,43,50,-43,-33, -1].forEach(function(v){
	   		heap.push(v)
	   })
	   assert.equal(50 , heap.pop())
	   assert.equal(43 , heap.pop())
	});

	it('size should return number of elements', function () {
	   [2,43,50,-43,-33, -1].forEach(function(v){
	   		heap.push(v)
	   })
	   assert.equal(6 , heap.size())
	});

});