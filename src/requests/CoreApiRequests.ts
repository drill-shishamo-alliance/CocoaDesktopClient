import * as coreApiServiceClientPb from 'src/models/protos/Core-apiServiceClientPb';
import * as coreApiPb from '../models/protos/core-api_pb';
import FeelingState from 'src/models/states/FeelingState';
import CauseOfFeelingState from 'src/models/states/CauseOfFeelingState';

export default class CoreApiServiceRequests {
    public inputDataRequest(
        feelingState: FeelingState,
        causeOfFeelingStates: CauseOfFeelingState[]
    ) {
        const client = new coreApiServiceClientPb.CoreAPIClient(
            'http://127.0.0.1:8080',
            {},
            {}
        );
        return new Promise<coreApiPb.InputDataResponse | Error>(
            (resolve, reject) => {
                const request = new coreApiPb.InputDataRequest();
                const requestFeeling = new coreApiPb.RequestFeeling();
                const requestCauseOfFeelings: coreApiPb.RequestCauseOfFeeling[] = [];

                for (const causeState of causeOfFeelingStates) {
                    const reqCauseOfFeeling = new coreApiPb.RequestCauseOfFeeling();
                    reqCauseOfFeeling.setCauseOfFeelingId(causeState.id);
                    requestCauseOfFeelings.push(reqCauseOfFeeling);
                }

                requestFeeling.setFeelingId(feelingState.feelingId);
                request.setFeeling(requestFeeling);
                request.setCauseOfFeelingList(requestCauseOfFeelings);
                request.setRespondent('tozastation');

                client.inputData(request, {}, (error, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(response);
                    }
                });
            }
        )
            .then(response => {
                return response;
            })
            .catch((error: Error) => {
                return error;
            });
    }
}
