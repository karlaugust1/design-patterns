import { Handler } from "../model/protocols"

export class FoodService {

    /**
     * Handler is by itself the linked handlers. Before send here, you'll need to make something like:
     * bananaHandler.setNext(dunetHandler).setNext(veganHandler)
     * 
     * @param handler Handler implementation
     */
    itWillBeEaten(handler: Handler, foodList?: string[]) {
        const foods = foodList ?? ['Banana', 'Dunet', 'Alface', 'Fígado']

        for (const food of foods) {
            console.log(`Will ${food} be eat?`)

            const result = handler.handle(food)
            if (result) {
                console.log(`  ${result}`)
            } else {
                console.log(`Ninguém gosta de ${food}`)
            }
        }
    }

}
