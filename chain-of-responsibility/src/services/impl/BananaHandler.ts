import { AbstractHandler } from "./AbstractHandler"

export class BananaHandler extends AbstractHandler {

    public handle(request: string): string {
        if (request.toLowerCase() === 'banana') {
            return `Banana has been eaten`;
        }

        return super.handle(request);
    }

}