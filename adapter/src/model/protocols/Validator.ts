export interface Validator {
    validate(object: unknown): Promise<boolean | string[]>
}