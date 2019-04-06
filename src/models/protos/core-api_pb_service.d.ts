// package: core_api
// file: core-api.proto

import * as core_api_pb from './core-api_pb';
import { grpc } from '@improbable-eng/grpc-web';

type CoreAPIFetchFeelings = {
    readonly methodName: string;
    readonly service: typeof CoreAPI;
    readonly requestStream: false;
    readonly responseStream: false;
    readonly requestType: typeof core_api_pb.FetchFeelingsRequest;
    readonly responseType: typeof core_api_pb.FetchFeelingsResponse;
};

type CoreAPIFetchInputCauseOfFeeling = {
    readonly methodName: string;
    readonly service: typeof CoreAPI;
    readonly requestStream: false;
    readonly responseStream: false;
    readonly requestType: typeof core_api_pb.FetchCauseOfFeelingsRequest;
    readonly responseType: typeof core_api_pb.FetchCauseOfFeelingsResponse;
};

type CoreAPIInputData = {
    readonly methodName: string;
    readonly service: typeof CoreAPI;
    readonly requestStream: false;
    readonly responseStream: false;
    readonly requestType: typeof core_api_pb.InputDataRequest;
    readonly responseType: typeof core_api_pb.InputDataResponse;
};

export class CoreAPI {
    static readonly serviceName: string;
    static readonly FetchFeelings: CoreAPIFetchFeelings;
    static readonly FetchInputCauseOfFeeling: CoreAPIFetchInputCauseOfFeeling;
    static readonly InputData: CoreAPIInputData;
}

export type ServiceError = {
    message: string;
    code: number;
    metadata: grpc.Metadata;
};
export type Status = { details: string; code: number; metadata: grpc.Metadata };

interface UnaryResponse {
    cancel(): void;
}
interface ResponseStream<T> {
    cancel(): void;
    on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
    on(type: 'end', handler: () => void): ResponseStream<T>;
    on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
    write(message: T): RequestStream<T>;
    end(): void;
    cancel(): void;
    on(type: 'end', handler: () => void): RequestStream<T>;
    on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
    write(message: ReqT): BidirectionalStream<ReqT, ResT>;
    end(): void;
    cancel(): void;
    on(
        type: 'data',
        handler: (message: ResT) => void
    ): BidirectionalStream<ReqT, ResT>;
    on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
    on(
        type: 'status',
        handler: (status: Status) => void
    ): BidirectionalStream<ReqT, ResT>;
}

export class CoreAPIClient {
    readonly serviceHost: string;

    constructor(serviceHost: string, options?: grpc.RpcOptions);
    fetchFeelings(
        requestMessage: core_api_pb.FetchFeelingsRequest,
        metadata: grpc.Metadata,
        callback: (
            error: ServiceError | null,
            responseMessage: core_api_pb.FetchFeelingsResponse | null
        ) => void
    ): UnaryResponse;
    fetchFeelings(
        requestMessage: core_api_pb.FetchFeelingsRequest,
        callback: (
            error: ServiceError | null,
            responseMessage: core_api_pb.FetchFeelingsResponse | null
        ) => void
    ): UnaryResponse;
    fetchInputCauseOfFeeling(
        requestMessage: core_api_pb.FetchCauseOfFeelingsRequest,
        metadata: grpc.Metadata,
        callback: (
            error: ServiceError | null,
            responseMessage: core_api_pb.FetchCauseOfFeelingsResponse | null
        ) => void
    ): UnaryResponse;
    fetchInputCauseOfFeeling(
        requestMessage: core_api_pb.FetchCauseOfFeelingsRequest,
        callback: (
            error: ServiceError | null,
            responseMessage: core_api_pb.FetchCauseOfFeelingsResponse | null
        ) => void
    ): UnaryResponse;
    inputData(
        requestMessage: core_api_pb.InputDataRequest,
        metadata: grpc.Metadata,
        callback: (
            error: ServiceError | null,
            responseMessage: core_api_pb.InputDataResponse | null
        ) => void
    ): UnaryResponse;
    inputData(
        requestMessage: core_api_pb.InputDataRequest,
        callback: (
            error: ServiceError | null,
            responseMessage: core_api_pb.InputDataResponse | null
        ) => void
    ): UnaryResponse;
}
