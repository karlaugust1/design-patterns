export interface Listener {

    // Method which allows receve updates from Publisher
    execute(transactionId: string): void

}