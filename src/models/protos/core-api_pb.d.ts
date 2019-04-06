// package: core_api
// file: core-api.proto

import * as jspb from 'google-protobuf';

export class RequestFeeling extends jspb.Message {
    getFeelingId(): number;
    setFeelingId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestFeeling.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: RequestFeeling
    ): RequestFeeling.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: RequestFeeling,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): RequestFeeling;
    static deserializeBinaryFromReader(
        message: RequestFeeling,
        reader: jspb.BinaryReader
    ): RequestFeeling;
}

export namespace RequestFeeling {
    export type AsObject = {
        feelingId: number;
    };
}

export class ResponseFeeling extends jspb.Message {
    getFeelingId(): number;
    setFeelingId(value: number): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseFeeling.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: ResponseFeeling
    ): ResponseFeeling.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: ResponseFeeling,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): ResponseFeeling;
    static deserializeBinaryFromReader(
        message: ResponseFeeling,
        reader: jspb.BinaryReader
    ): ResponseFeeling;
}

export namespace ResponseFeeling {
    export type AsObject = {
        feelingId: number;
        name: string;
    };
}

export class FetchFeelingsRequest extends jspb.Message {
    getRespondent(): string;
    setRespondent(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchFeelingsRequest.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: FetchFeelingsRequest
    ): FetchFeelingsRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: FetchFeelingsRequest,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): FetchFeelingsRequest;
    static deserializeBinaryFromReader(
        message: FetchFeelingsRequest,
        reader: jspb.BinaryReader
    ): FetchFeelingsRequest;
}

export namespace FetchFeelingsRequest {
    export type AsObject = {
        respondent: string;
    };
}

export class FetchFeelingsResponse extends jspb.Message {
    clearFeelingsList(): void;
    getFeelingsList(): Array<ResponseFeeling>;
    setFeelingsList(value: Array<ResponseFeeling>): void;
    addFeelings(value?: ResponseFeeling, index?: number): ResponseFeeling;

    getResult(): Result;
    setResult(value: Result): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchFeelingsResponse.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: FetchFeelingsResponse
    ): FetchFeelingsResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: FetchFeelingsResponse,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): FetchFeelingsResponse;
    static deserializeBinaryFromReader(
        message: FetchFeelingsResponse,
        reader: jspb.BinaryReader
    ): FetchFeelingsResponse;
}

export namespace FetchFeelingsResponse {
    export type AsObject = {
        feelingsList: Array<ResponseFeeling.AsObject>;
        result: Result;
    };
}

export class RequestCauseOfFeeling extends jspb.Message {
    getCauseOfFeelingId(): number;
    setCauseOfFeelingId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestCauseOfFeeling.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: RequestCauseOfFeeling
    ): RequestCauseOfFeeling.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: RequestCauseOfFeeling,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): RequestCauseOfFeeling;
    static deserializeBinaryFromReader(
        message: RequestCauseOfFeeling,
        reader: jspb.BinaryReader
    ): RequestCauseOfFeeling;
}

export namespace RequestCauseOfFeeling {
    export type AsObject = {
        causeOfFeelingId: number;
    };
}

export class ResponseCauseOfFeeling extends jspb.Message {
    getCauseOfFeelingId(): number;
    setCauseOfFeelingId(value: number): void;

    getName(): string;
    setName(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseCauseOfFeeling.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: ResponseCauseOfFeeling
    ): ResponseCauseOfFeeling.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: ResponseCauseOfFeeling,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): ResponseCauseOfFeeling;
    static deserializeBinaryFromReader(
        message: ResponseCauseOfFeeling,
        reader: jspb.BinaryReader
    ): ResponseCauseOfFeeling;
}

export namespace ResponseCauseOfFeeling {
    export type AsObject = {
        causeOfFeelingId: number;
        name: string;
    };
}

export class FetchCauseOfFeelingsRequest extends jspb.Message {
    getRespondent(): string;
    setRespondent(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchCauseOfFeelingsRequest.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: FetchCauseOfFeelingsRequest
    ): FetchCauseOfFeelingsRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: FetchCauseOfFeelingsRequest,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): FetchCauseOfFeelingsRequest;
    static deserializeBinaryFromReader(
        message: FetchCauseOfFeelingsRequest,
        reader: jspb.BinaryReader
    ): FetchCauseOfFeelingsRequest;
}

export namespace FetchCauseOfFeelingsRequest {
    export type AsObject = {
        respondent: string;
    };
}

export class FetchCauseOfFeelingsResponse extends jspb.Message {
    clearCauseOfFeelingsList(): void;
    getCauseOfFeelingsList(): Array<ResponseCauseOfFeeling>;
    setCauseOfFeelingsList(value: Array<ResponseCauseOfFeeling>): void;
    addCauseOfFeelings(
        value?: ResponseCauseOfFeeling,
        index?: number
    ): ResponseCauseOfFeeling;

    getResult(): Result;
    setResult(value: Result): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FetchCauseOfFeelingsResponse.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: FetchCauseOfFeelingsResponse
    ): FetchCauseOfFeelingsResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: FetchCauseOfFeelingsResponse,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): FetchCauseOfFeelingsResponse;
    static deserializeBinaryFromReader(
        message: FetchCauseOfFeelingsResponse,
        reader: jspb.BinaryReader
    ): FetchCauseOfFeelingsResponse;
}

export namespace FetchCauseOfFeelingsResponse {
    export type AsObject = {
        causeOfFeelingsList: Array<ResponseCauseOfFeeling.AsObject>;
        result: Result;
    };
}

export class InputDataRequest extends jspb.Message {
    hasFeeling(): boolean;
    clearFeeling(): void;
    getFeeling(): RequestFeeling | undefined;
    setFeeling(value?: RequestFeeling): void;

    clearCauseOfFeelingList(): void;
    getCauseOfFeelingList(): Array<RequestCauseOfFeeling>;
    setCauseOfFeelingList(value: Array<RequestCauseOfFeeling>): void;
    addCauseOfFeeling(
        value?: RequestCauseOfFeeling,
        index?: number
    ): RequestCauseOfFeeling;

    getRespondent(): string;
    setRespondent(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputDataRequest.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: InputDataRequest
    ): InputDataRequest.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: InputDataRequest,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): InputDataRequest;
    static deserializeBinaryFromReader(
        message: InputDataRequest,
        reader: jspb.BinaryReader
    ): InputDataRequest;
}

export namespace InputDataRequest {
    export type AsObject = {
        feeling?: RequestFeeling.AsObject;
        causeOfFeelingList: Array<RequestCauseOfFeeling.AsObject>;
        respondent: string;
    };
}

export class InputDataResponse extends jspb.Message {
    getResult(): Result;
    setResult(value: Result): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InputDataResponse.AsObject;
    static toObject(
        includeInstance: boolean,
        msg: InputDataResponse
    ): InputDataResponse.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
        message: InputDataResponse,
        writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): InputDataResponse;
    static deserializeBinaryFromReader(
        message: InputDataResponse,
        reader: jspb.BinaryReader
    ): InputDataResponse;
}

export namespace InputDataResponse {
    export type AsObject = {
        result: Result;
    };
}

export enum Result {
    SUCCESS = 0,
    FAILED = 1
}
