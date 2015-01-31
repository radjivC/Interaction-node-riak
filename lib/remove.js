var db = require('riak-js').getClient({host: "localhost", port: "9000"});

function deleteOne (id, callback) {
  client.del(_key_(id), function (err, deleted) {
    if (!err && deleted == 0) err = {"message": "unicorn not found", "type":"ENOTFOUND"};
    callback(err, deleted > 0);
  });
}
