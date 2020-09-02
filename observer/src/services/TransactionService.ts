import { Publisher, Listener } from '../model/protocols'
export class TransactionService implements Publisher {

    private listeners: Listener[] = []

    constructor(
        private readonly notificationService: Listener
    ) {
        this.listeners.push(this.notificationService)
    }

    attach(listener: Listener): void {
        if (!this.listeners.includes(listener)) {
            this.listeners.push(listener)
        }
    }
    detach(listener: Listener): void {
        const index = this.listeners.indexOf(listener)
        if (index !== -1) {
            this.listeners.splice(index, 1)
        }
    }
    notifyAll(transactionId: string): void {
        console.log('Publishing new message to listeners')
        for (const listener of this.listeners) {
            listener.execute(transactionId)
        }
    }

    executeTransaction() {
        const id = Math.floor(Math.random() * 7)
        this.notifyAll(id.toString())
    }

}