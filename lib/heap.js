module.exports = (function(){
	var swapDown = function(content, comparator){
		var current_index = 0 ;
		while( 2*current_index + 1 < content.length ) {
			var leftChild = 2*current_index + 1;
			var rightChild = 2*current_index + 2;
			var target;
			if(rightChild < content.length) {
				 target = comparator(content[leftChild], content[rightChild]) < 0 ? leftChild : rightChild;
			} else {
				 target = leftChild
			}
			if(comparator(content[current_index], content[target]) > 0) {
				var temp = content[current_index];
				content[current_index] = content[target];
				content[target] = temp;
				current_index = target;
			} else {
				break;
			}
		}			
	};

 
	var swapUp = function(content, comparator){
		if(content.length < 2) return;
		var current_index = content.length - 1;
		while(current_index > 0) {
			var parent_index = Math.floor((current_index-1)/2);
			if(comparator(content[parent_index], content[current_index]) > 0) {
				var temp = content[parent_index];
				content[parent_index] = content[current_index];
				content[current_index] = temp;
				current_index = parent_index;
			} else {
				break;
			}
		}
	};
	var BinaryHeap = function (comparator) {
		this.content = [];
		this.comparator = comparator || function(a, b) {
			if(a > b) return 1;
			if(a < b) return -1;
			return 0;
		};
	};

	BinaryHeap.prototype = {
		push: function(n) {
			this.content.push(n);
			swapUp(this.content, this.comparator);
		},
		pop: function() {
			if(this.content.length <= 1) return this.content.pop();
			var result = this.content[0];
			this.content[0] = this.content.pop();
			swapDown(this.content, this.comparator);
			return result;
		},
		size: function() {
			return this.content.length;
		},
		peak: function() {
			return this.content[0];
		}
	}

	return BinaryHeap;
})()

