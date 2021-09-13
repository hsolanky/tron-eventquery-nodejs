# Tron EventQuery in NodeJS
## Fast, Extendable and Scaleable EventQuery Server implementation for TronNode


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

### Transafers API Endpoint

```sh
Transaction or Transfers Endpoint
$baseURL/transactions

Usage With Filters
$baseURL/transactions?token=TRX&to=TRbY18Dfdf8ipMeTRhXqNnqYttazSmF2W1&since=1630164995121&limit=10

This returns all the transfers that are to the above specified address since the above specified time having the token TRX
```

List of all available Filters

| FilterKey | Type | Explanation |
| ------ | ------ | ------ |
| limit | number | number of transactions to return, default is 25. |
| skip | number | number of transactions to Skip, default is 0. |
| sortField | string | sort Field, default is sort by timeStamp |
| sortOrder | number | sort order, default is descending order. |
| from | string | from address, default is "". |
| to | string | to address, default is "". |
| token | string | AssetName of the transaction Object, default is "". |
| since | number | (also timeStamp greater than) timestamp after which to return Transactions, default is 0. |

### ContractEvents API Endpoint

```sh
Transaction or Transfers Endpoint
$baseURL/contractEvents

Usage With Filters
$baseURL/contractEvents?eventName=Transfer&contractAddress=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&to=TRbY18Dfdf8ipMeTRhXqNnqYttazSmF2W1&since=1630164995121&limit=10

This returns all the USDT (contract Address above is USDT address) transfers that are to the above specified address since the above specified time having the token TRX
```
List of all available Filters

| FilterKey | Type | Explanation |
| ------ | ------ | ------ |
| contractAddress | string | Contract Address of the TRC-20 Token |
| limit | number | number of Events to return, default is 25. |
| skip | number | number of Events to Skip, default is 0. |
| sortField | string | sort Field, default is sort by timeStamp |
| sortOrder | number | sort order, default is descending order. |
| from | string | from address, default is "". |
| to | string | to address, default is "". |
| eventName | string | eventName, default is allEvents. |
| since | number | (also timeStamp greater than) timestamp after which to return Transactions, default is 0. |

## License

MIT
