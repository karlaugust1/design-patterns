import { Listener } from "../model/protocols";

export class StatementService implements Listener {

    execute(transactionId: string): void {
        console.log(`Statement received the message ${transactionId}`);
    }

}