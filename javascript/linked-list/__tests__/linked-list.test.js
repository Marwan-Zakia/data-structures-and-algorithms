'use strict';

// Require our linked list implementation
const LinkedList = require('../linklist');

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
  it('it adds a new node before the last node', () => {
    const ll = new LinkedList();
    ll.insert(1)
    ll.insert(2)
    ll.insert(3)
    ll.insertBefore(5,2)
    expect(ll.to_string()).toEqual('head{1} -> {5} -> {2} -> {3} -> X')
  
  })
  it('it adds a new node after the last node', () => {
    const ll = new LinkedList();
    ll.insert(1)
    ll.insert(2)
    ll.insert(3)
    ll.insertAfter(5,2)
    expect(ll.to_string()).toEqual('head{1} -> {5} -> {2} -> {3} -> X')
  })
  
  
  
  
  
  

});