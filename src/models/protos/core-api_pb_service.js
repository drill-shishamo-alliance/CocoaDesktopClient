// package: core_api
// file: core-api.proto

var core_api_pb = require("./core-api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CoreAPI = (function () {
  function CoreAPI() {}
  CoreAPI.serviceName = "core_api.CoreAPI";
  return CoreAPI;
}());

CoreAPI.FetchFeelings = {
  methodName: "FetchFeelings",
  service: CoreAPI,
  requestStream: false,
  responseStream: false,
  requestType: core_api_pb.FetchFeelingsRequest,
  responseType: core_api_pb.FetchFeelingsResponse
};

CoreAPI.FetchInputCauseOfFeeling = {
  methodName: "FetchInputCauseOfFeeling",
  service: CoreAPI,
  requestStream: false,
  responseStream: false,
  requestType: core_api_pb.FetchCauseOfFeelingsRequest,
  responseType: core_api_pb.FetchCauseOfFeelingsResponse
};

CoreAPI.InputData = {
  methodName: "InputData",
  service: CoreAPI,
  requestStream: false,
  responseStream: false,
  requestType: core_api_pb.InputDataRequest,
  responseType: core_api_pb.InputDataResponse
};

exports.CoreAPI = CoreAPI;

function CoreAPIClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CoreAPIClient.prototype.fetchFeelings = function fetchFeelings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreAPI.FetchFeelings, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CoreAPIClient.prototype.fetchInputCauseOfFeeling = function fetchInputCauseOfFeeling(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreAPI.FetchInputCauseOfFeeling, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CoreAPIClient.prototype.inputData = function inputData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CoreAPI.InputData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CoreAPIClient = CoreAPIClient;

