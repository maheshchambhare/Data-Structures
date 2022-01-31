

// Stack Datastructure Implementation
//  Methods => Push ,Pop , Peek and Length

// Last In first Out


let stack = {};   //Empty Stack initialised
let count = 0;    // count to push , pop ,and peek action



const push = (d) => {    
    count++;                    // count ++ for increament so that we can push another item on top of stack
    return stack[count] = d    // d is item that is being added in stack
}

const pop = () => {          // pop method for removing items from the stack
    if(count > 0){          // if stack is not empty then remove item
     delete stack[count]
     count--                // count -- for removing stacks element that was pushed recentylt
    }else{
        console.log("stack is empty")  // if stack is empty 
    }
 
}

const peek = () => {         // peek for getting the top most element on stack
    return stack[count]     //  count represents top element on stack
}



push("H")
push("E")
push("Y")

console.log(stack)

console.log(peek())

pop()
console.log(stack)

console.log(peek())

console.log("Length => ",count)


//  Output Of stack

// { '1': 'H', '2': 'E', '3': 'Y' }   after push
// Y                                  peek => top element Y
// { '1': 'H', '2': 'E' }             pop => removed y
// E                                  peek => top element E
// Length =>  2                       Length => 2

