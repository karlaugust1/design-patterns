import { Listener } from "./Listener";

export interface Publisher {

    // Attach an new listener to the publisher
    attach(listener: Listener): void

    // Detach a listener from the publisher
    detach(listener: Listener): void

    // Notify all observers about the event
    notifyAll(transactionId: string): void

}
