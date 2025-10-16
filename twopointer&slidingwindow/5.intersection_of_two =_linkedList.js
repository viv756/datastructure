var getIntersectionNode = function (headA, headB) {
    let a = headA;

    while (a !== null) {
        let b = headB;
        while (b !== null) {
            if (a === b) {   // comparing references, not values
                return a;
            }
            b = b.next;
        }
        a = a.next;
    }

    return null;
};
