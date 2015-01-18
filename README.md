Interaction Riak with node.js
=====================================

In lib folder you have different files with interaction example how to use riak with Nodejs.

Every files can work independant.

In Rest Api folder you have an example in a real case.

Don't forget to install the package for the REST Api:
```
npm install
```

In the lib folder you have separate example to show: how to use the each functions for Redis.

You have a Rest Api example in the folder RestAPiExample, this is a global example how to use redis in a real case.
And of course the same Api with coffee Script syntax.

What is riak?
================

Riak is a distributed database designed to deliver maximum data availability by distributing data across multiple servers. As long as your Riak client can reach one Riak server, it should be able to write data.

While Riak is typically known as an eventually consistent system, beginning with version 2.0 it can be used either as an eventually or strongly consistent system, and these two approaches can be mixed and matched in a single cluster.

When Riak is used as an eventually consistent system, the data that you want to read should remain available in most failure scenarios, although it may not be the most up-to-date version of that data.

When Riak is used as a strongly consistent system, on the other hand, reads will return the most up-to-date version of data, with the drawback that some nodes will be temporarily unavailable to receive writes in certain rare situations.
