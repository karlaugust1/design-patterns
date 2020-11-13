import { AbstractHandler } from "./AbstractHandler"

export class VeganHandler extends AbstractHandler {

    public handle(request: string): string {
        if (request.toLowerCase() === 'alface') {
            return `Alface has been eaten by a Vegan`;
        }

        return super.handle(request);
    }

}