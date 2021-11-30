# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gbada/lotide`

**Require it:**

`const _ = require('@gbada/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts whether two arrays are the same or not 
* `AssertEqual`: asserts whether two data types are the same.
* `assertObjectsEqual`: asserts whether two objects are the same.
* `countLetters`: returns the amount of letters in a given string.
* `countOnly`: returns subset of strings from given array.
* `eqArrays`: returns true or false for comparison of two arrays.
* `eqObjects`: returns true or false for comparison of two objects.
* `findKey`: returns key names within objects.
* `findKeyByValue`: return first key 
* `head`: returns first value within any array.
* `index`: contains list of all functions within Lotide
* `letterPositions`: returns the positions of the letters within a given string.
* `map`: returns new array.
* `middle`: returns middle elements within an array.
* `tail`: returns tail of array.
* `takeUntil`: returns array based on given array anf call back function.
* `without`: removes elements from an array.