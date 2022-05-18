exports.handler = function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false
    console.log('Lambda code')
    setTimeout(function () {
      console.log('Timeout complete.')
    }, 5000)
  }
