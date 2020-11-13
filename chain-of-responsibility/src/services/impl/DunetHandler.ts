import { AbstractHandler } from "./AbstractHandler"

export class DunetHandler extends AbstractHandler {

    public handle(request: string): string {
        if (request.toLowerCase() === 'dunet') {
            return `Dunet has been eaten`;
        }

        return super.handle(request);
    }

}