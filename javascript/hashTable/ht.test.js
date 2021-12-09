'use strict';
const Hashtable = require('./hashTable');

    test('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
        let ht = new Hashtable(10);
        ht.add('key', 'value');
        expect(ht.get('key')).toBe('value');  
    })
    
    test('Successfully returns true that exists in the hashtable',()=>{
        let ht = new Hashtable(10);
        ht.add('key', 'value');
        expect(ht.contains('key')).toBe(true);
    })
    test('Successfully returns false that doesn`t exists in the hashtable',()=>{
        let ht = new Hashtable(10);
        ht.add('key', 'value');
        expect(ht.contains('no_no')).toBe(false);
    })
    test('Retrieving based on a key returns the value stored',()=>{
        let ht = new Hashtable(10);
        ht.add('key', 'value');
        expect(ht.get('key')).toBe('value');  
    })
    test('Successfully returns null for a key that does not exist in the hashtable',()=>{
        let ht = new Hashtable();
        expect(ht.get('key')).toBe(undefined);    
    })
    test('Successfully handle a collision within the hashtable',()=>{
        let ht = new Hashtable(10);
        ht.add('key', 'value');
        ht.add('key', 'value2');
        expect(ht.get('key')).toStrictEqual([["key", "value"], ["key", "value2"]]);     
    })
    test('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
        let ht = new Hashtable(10);
        ht.add('key', 'value');
        ht.add('key', 'value2');
        expect(ht.get('key','value2')).toStrictEqual('value2');     
    })
    test('Successfully hash a key to an in-range value',()=>{
        let ht = new Hashtable(10);
        ht.add('key', 'value');
        expect(ht.get('key')).toBe('value');      
    })
// - Successfully returns true that exists in the hashtable
// - Adding a key/value to your hashtable results in the value being in the data structure
// - Retrieving based on a key returns the value stored
// - Successfully returns null for a key that does not exist in the hashtable
// - Successfully handle a collision within the hashtable
// - Successfully retrieve a value from a bucket within the hashtable that has a collision
// - Successfully hash a key to an in-range value