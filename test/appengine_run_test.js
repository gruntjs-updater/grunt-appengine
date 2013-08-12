var ctx = require('./context.js');

exports.copy = {

  testRunDevServer: function (test) {
    var task = ctx.newTask(['myapp', 'run']);

    var result = task.execute();
    test.equals(result, 'dev_appserver.py --port=8080 .');

    test.done();
  },

  testRunDevServerInAnotherDirectory: function (test) {
    var task = ctx.newTask(['myapp', 'run'], {
      directory: "myapp/"
    });

    var result = task.execute();
    test.equals(result, 'dev_appserver.py --port=8080 myapp/');

    test.done();
  },

  testRunDevServerWithClearDatastore: function (test) {
    var task = ctx.newTask(['myapp', 'run'], {
      runFlags: {
        "clear_datastore": "yes"
      }
    });

    var result = task.execute();
    test.equals(result, 'dev_appserver.py --port=8080 --clear_datastore=yes .');

    test.done();
  },

  testRunDevServerWithMail: function (test) {
    var task = ctx.newTask(['myapp', 'run'], {
      runFlags: {
        "enable_sendmail": true
      }
    });

    var result = task.execute();
    test.equals(result, 'dev_appserver.py --port=8080 --enable_sendmail .');

    test.done();
  },

  testRunDevServerWithBackends: function (test) {
    var task = ctx.newTask(['myapp', 'run'], {
      runFlags: {
        "backends": true
      }
    });

    var result = task.execute();
    test.equals(result, 'dev_appserver.py --port=8080 --backends .');

    test.done();
  }

};