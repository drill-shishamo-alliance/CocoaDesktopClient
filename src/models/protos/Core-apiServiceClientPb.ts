/**
 * @fileoverview gRPC-Web generated client stub for core_api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

import * as grpcWeb from 'grpc-web';

import {
    FetchCauseOfFeelingsRequest,
    FetchCauseOfFeelingsResponse,
    FetchFeelingsRequest,
    FetchFeelingsResponse,
    InputDataRequest,
    InputDataResponse
} from './core-api_pb';

export class CoreAPIClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | { [index: string]: string };
    options_: null | { [index: string]: string };

    constructor(
        hostname: string,
        credentials: null | { [index: string]: string },
        options: null | { [index: string]: string }
    ) {
        if (!options) options = {};
        options['format'] = 'text';

        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }

    methodInfoFetchFeelings = new grpcWeb.AbstractClientBase.MethodInfo(
        FetchFeelingsResponse,
        (request: FetchFeelingsRequest) => {
            return request.serializeBinary();
        },
        FetchFeelingsResponse.deserializeBinary
    );

    fetchFeelings(
        request: FetchFeelingsRequest,
        metadata: grpcWeb.Metadata | null,
        callback: (err: grpcWeb.Error, response: FetchFeelingsResponse) => void
    ) {
        return this.client_.rpcCall(
            this.hostname_ + '/core_api.CoreAPI/FetchFeelings',
            request,
            metadata || {},
            this.methodInfoFetchFeelings,
            callback
        );
    }

    methodInfoFetchInputCauseOfFeeling = new grpcWeb.AbstractClientBase.MethodInfo(
        FetchCauseOfFeelingsResponse,
        (request: FetchCauseOfFeelingsRequest) => {
            return request.serializeBinary();
        },
        FetchCauseOfFeelingsResponse.deserializeBinary
    );

    fetchInputCauseOfFeeling(
        request: FetchCauseOfFeelingsRequest,
        metadata: grpcWeb.Metadata | null,
        callback: (
            err: grpcWeb.Error,
            response: FetchCauseOfFeelingsResponse
        ) => void
    ) {
        return this.client_.rpcCall(
            this.hostname_ + '/core_api.CoreAPI/FetchInputCauseOfFeeling',
            request,
            metadata || {},
            this.methodInfoFetchInputCauseOfFeeling,
            callback
        );
    }

    methodInfoInputData = new grpcWeb.AbstractClientBase.MethodInfo(
        InputDataResponse,
        (request: InputDataRequest) => {
            return request.serializeBinary();
        },
        InputDataResponse.deserializeBinary
    );

    inputData(
        request: InputDataRequest,
        metadata: grpcWeb.Metadata | null,
        callback: (err: grpcWeb.Error, response: InputDataResponse) => void
    ) {
        return this.client_.rpcCall(
            this.hostname_ + '/core_api.CoreAPI/InputData',
            request,
            metadata || {},
            this.methodInfoInputData,
            callback
        );
    }
}
