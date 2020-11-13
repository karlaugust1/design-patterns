import { Handler } from '../../src/model/protocols'
import { FoodService } from '../../src/services'
import { BananaHandler, DunetHandler, VeganHandler } from '../../src/services/impl'

interface SutTypes {
    sut: FoodService,
    bananaHandler: BananaHandler,
    dunetHandler: DunetHandler,
    veganHandler: VeganHandler
}

const makeSut = (): SutTypes => {
    const sut: FoodService = new FoodService()
    const bananaHandler: BananaHandler = new BananaHandler()
    const dunetHandler: DunetHandler = new DunetHandler()
    const veganHandler: VeganHandler = new VeganHandler()

    return { sut, bananaHandler, dunetHandler, veganHandler }
}

describe('Food Service', () => {

    test('Should call BananaHandler', () => {
        console.log("--------------------------");
        const { sut, bananaHandler, veganHandler, dunetHandler } = makeSut()
        bananaHandler.setNext(dunetHandler).setNext(veganHandler)

        const executeSpy = jest.spyOn(bananaHandler, 'handle')
        sut.itWillBeEaten(bananaHandler)
        expect(executeSpy).toHaveBeenCalled()
    })

    test('Should call DunetHandler', () => {
        console.log("--------------------------");
        const { sut, bananaHandler, veganHandler, dunetHandler } = makeSut()
        bananaHandler.setNext(dunetHandler).setNext(veganHandler)

        const executeSpy = jest.spyOn(dunetHandler, 'handle')
        sut.itWillBeEaten(bananaHandler)
        expect(executeSpy).toHaveBeenCalled()
    })

    test('Should call VeganHandler', () => {
        console.log("--------------------------");
        const { sut, bananaHandler, veganHandler, dunetHandler } = makeSut()
        bananaHandler.setNext(dunetHandler).setNext(veganHandler)

        const executeSpy = jest.spyOn(veganHandler, 'handle')
        sut.itWillBeEaten(bananaHandler)
        expect(executeSpy).toHaveBeenCalled()
    })

    test('Will someone eat an Orange?', () => {
        console.log("--------------------------");
        const { sut, bananaHandler, veganHandler, dunetHandler } = makeSut()
        bananaHandler.setNext(dunetHandler).setNext(veganHandler)

        const executeSpy = jest.spyOn(veganHandler, 'handle')
        sut.itWillBeEaten(bananaHandler, ['orange'])
        expect(executeSpy).toHaveBeenCalled()
    })

})
