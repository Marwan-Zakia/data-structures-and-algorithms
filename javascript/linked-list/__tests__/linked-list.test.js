'use strict';

// Require our linked list implementation
const {LinkedList,zipLists} = require('../linklist');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });



it('start', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
  expect(ll.head).toBeNull();
});


it('it adds the element to the beginning of the list', () => {
  const ll = new LinkedList()
  ll.insert(10)
  expect(ll.head.value).toBe(10)

})

it('check the old head', () => {
  const ll = new LinkedList()
  ll.insert(10)
  ll.insert(20)
  expect(ll.head.value).toBe(10)

})

it('it adds Multiple element to the list', () => {
  const ll = new LinkedList();
  ll.insert(10)
  ll.insert(20)
  ll.insert(30)
  expect(ll.head.value).toEqual(10)
  expect(ll.head.next.value).toEqual(20)
  expect(ll.head.next.next.value).toEqual(30)
})
it('Will return true when finding a value within the linked list that exists', () => {
  const ll = new LinkedList();
  ll.insert(10);
  ll.insert(50);
  expect(ll.include(50)).toBe(true);
  expect(ll.include(10)).toBe(true);
  expect(ll.include('marwan')).toBe(false);
});
 it('string representing all the values in the Linked List,',()=>{
    let ll = new LinkedList();
    ll.insert('a');
    ll.insert('b');
    ll.insert('c');           
    expect(ll.to_string()).toBe('head{a} -> {b} -> {c} -> X');
  });
  
  it('it adds Multiple elements to the end of the list', () => {
    const ll = new LinkedList();
    ll.insert(10)
    ll.insert(20)
    ll.insert(30)
    ll.append(40)
    expect(ll.head.value).toEqual(10)
    expect(ll.head.next.value).toEqual(20)
    expect(ll.head.next.next.value).toEqual(30)
    expect(ll.head.next.next.next.value).toEqual(40)
  })
  
  it('it adds Multiple elements to the end of the list', () => {
    const ll = new LinkedList();
    ll.insert(1)
    ll.insert(3)
    ll.insert(2)
    ll.append(5)
    
    expect(ll.to_string()).toEqual('head{1} -> {3} -> {2} -> {5} -> X')
  })
  
   // head -> [1] -> [3] -> [2] -> X	3, 5	head -> [1] -> [5] -> [3] -> [2] -> X
  it('it adds a new node before the last node', () => {
    const ll = new LinkedList();
    ll.insert(1)
    ll.insert(3)
    ll.insert(2)
    ll.insertBefore(3,5)
    expect(ll.to_string()).toEqual('head{1} -> {5} -> {3} -> {2} -> X')
  
  })
  it('it adds a new node after the last node', () => {
    const ll = new LinkedList();
    ll.insert(1)
    ll.insert(3)
    ll.insert(2)
    ll.insertAfter(2,5)
    // head -> [1] -> [3] -> [2] -> X   	2, 5	   head -> [1] -> [3] -> [2] -> [5] -> X
    expect(ll.to_string()).toEqual('head{1} -> {3} -> {2} -> {5} -> X')
  })
  
  it('it adds a new node after the last node', () => {
    const ll = new LinkedList();
    ll.insert(1)
    ll.insert(3)
    ll.insert(8)
    ll.insert(2)
    //head -> [1] -> [3] -> [8] -> [2] -> X	       0	            2
    //head -> [1] -> [3] -> [8] -> [2] -> X	2	   3
    expect(ll.kthFromEnd(2)).toEqual(3)
  })
  it('it adds a new node after the last node', () => {
    const ll = new LinkedList();
    ll.insert(1)
    //head -> [1] -> [3] -> [8] -> [2] -> X	       0	            2
    //head -> [1] -> [3] -> [8] -> [2] -> X	2	   3
    expect(ll.kthFromEnd(0)).toEqual('Exception')
  })
//   it('it adds a new node after the last node', () => {
//     let ll = new LinkedList();
//     let  ll2 = new LinkedList();
//     ll.insert(1)
//     ll.insert(3)
//     ll.insert(2)
//     ll2.insert(5)
//     ll2.insert(9)
//     ll2.insert(4)
//     zipLists(ll, ll2)
//     //head -> [1] -> [3] -> [8] -> [2] -> X	       0	            2
//     //head -> [1] -> [3] -> [8] -> [2] -> X	2	   3
//     // head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X
//     // head -> [1] -> [3] -> [2] -> X	head -> [5] -> [9] -> [4] -> X
//  let newlist= zipLists(ll,ll2)
//  console.log(newlist)
//  newlist=new LinkedList()
//  console.log(newlist)
//  expect(ll.kthFromEnd(0)).toEqual('Exception')
//   })
  
  
  
  
  

  
  

});