import { Listener } from "../model/protocols";

export class NotificationService implements Listener {

    execute(transactionId: string): void {
        console.log(`Notification received the message ${transactionId}`);
    }

}