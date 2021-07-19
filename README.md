# Tron EventQuery in NodeJS
## Fast, Extendable and Scaleable EventQuery Server implementation for TronNode

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is a EventQuery Server that can be used to query transactions, block, contractEvent information from your TronNode when run parallel with the Tron MongoDB Plugin.


## Motivation

During the time of development, the current Java based EventQuery server available for MonogDB Tron Plugin was missing some essential features such as ability to directly filter contract transfers by to and from address via an API call. Also the filter by timestamp condition was missing in usual transaction API. To add to this the Tron node was already resource intensive and a light weight EventQuery Server was much needed.


> Thus this repository explores creation of a Fast, lightweight, Extendable and Scaleable EventQuery Server implementation for TronNode



## Installation

After cloning the repository, cd into the folder and run


```sh
npm install
```

## Environemnt Variables



| Key | Explanation |
| ------ | ------ |
| MONGODB_URI | The MongoDB connection String ex 'mongodb://127.0.0.1:27017/?authSource=admin' |


## Usage

To be Updated!

## License

MIT
