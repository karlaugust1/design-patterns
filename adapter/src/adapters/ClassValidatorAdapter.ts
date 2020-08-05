import { validate, ValidationError } from "class-validator"
import { Validator } from "../model/protocols/Validator";

export class ClassValidatorAdapter implements Validator {

    async validate(object: unknown): Promise<boolean | string[]> {
        const errors: ValidationError[] = await validate(object)
        if (errors.length === 0) {
            return true
        }
        return false
    }

}