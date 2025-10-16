var Node = function (value, next) {
    return { value, next };
}

var MyLinkedList = function() {
    this.head = {next:null,value:null}
    this.size = 0
    return this
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;

    let current = this.head.next;
    for (i = 0; i < index; i++) {
        current = current.next;
    }

    return current.value;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    this.addAtIndex(0, val);

    return this;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    this.addAtIndex(this.size, val);

    return this;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return this;

    let current = this.head;

    for (let i = 0; i < index ; i++) {
        current = current.next;
    }

    current.next = new Node(val, current.next);
    this.size++
    return this;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return this;

    this.size--;

    let current = this.head;

    for (let i = 0; i < index; i++) {
        current = current.next;
    }

    current.next = current.next.next;

    return this;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */