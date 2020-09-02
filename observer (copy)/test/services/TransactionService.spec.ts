import { TransactionService, StatementService, NotificationService } from "../../src/services"
import { Listener } from "../../src/model/protocols"

interface SutTypes {
    sut: TransactionService
    statementService: Listener
    notificationService: Listener
}

const makeSut = (): SutTypes => {
    const notificationService = new NotificationService()
    const sut = new TransactionService(notificationService)
    const statementService = new StatementService()

    return {
        sut,
        statementService,
        notificationService
    }
}

describe("TransactionService", () => {
    test("Should call StatementService", () => {
        jest.spyOn
        const { sut, statementService } = makeSut()

        const executeSpy = jest.spyOn(statementService, 'execute')
        //One of the methods to include in listeners list inside TransactionService
        sut.attach(statementService)

        sut.executeTransaction()

        expect(executeSpy).toHaveBeenCalled()
    })
    test("Should call NotificationService", () => {
        jest.spyOn
        const { sut, notificationService } = makeSut()

        const executeSpy = jest.spyOn(notificationService, 'execute')

        sut.executeTransaction()

        expect(executeSpy).toHaveBeenCalled()
    })
})
