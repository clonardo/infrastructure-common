import rx = require('rx');
import { Id } from "./entity";
export interface IDomainEvent {
    context: string;
    name: string;
}
export declare class DomainEventBase implements IDomainEvent {
    name: string;
    private _name;
    context: string;
    private _context;
    constructor(context: string, name: string);
}
export declare class AggregateEvent extends DomainEventBase {
    id: Id;
    private _id;
    version: string;
    private _version;
    constructor(context: string, name: string, id: Id, version: string);
}
export interface IDomainEventBus {
    publish(event: IDomainEvent): void;
    subscribe(group: string): rx.Observable<IDomainEvent>;
}
export interface IEventHandler<TEvent extends IDomainEvent> {
    Handle(event: TEvent): TEvent[];
}
export declare class DomainEventBusImpl implements IDomainEventBus {
    private map;
    constructor();
    publish(event: IDomainEvent): void;
    subscribe(contextName: string): rx.Observable<IDomainEvent>;
}