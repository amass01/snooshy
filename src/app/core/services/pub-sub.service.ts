import { Injectable } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

export interface IPubSubMessage {
    type: PubSubMessageType;
    payload: any;
}

export enum PubSubMessageType {
    ErrorMessage = 1,
    ShowOverlay = 2,
    HideOverlay = 3,
}

@Injectable({
  providedIn: "root"
})
export class PubSubService {
    private handler: Subject<IPubSubMessage> = new Subject<IPubSubMessage>();

    constructor() {
    }

    broadcast<TPayload>(type: PubSubMessageType, payload?: TPayload) {
        this.handler.next({type, payload});
    }

    subscribe<TPayload>(type: PubSubMessageType, callback: (payload?: TPayload) => void): Subscription {
        return this.handler.pipe(
            filter(m => m.type === type),
            map(message => message.payload)
        ).subscribe(callback);
    }
}
