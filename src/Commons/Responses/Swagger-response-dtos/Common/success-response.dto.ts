export class SuccessResponseDto {
    message: string[];
    error: string;
    statusCode: number;
    data: object;

    constructor(data: object = {}, message: string[] = [''], statusCode: number, error: string = '') {
        this.message = message;
        this.error = error;
        this.statusCode = statusCode;
        this.data = data;
    }
}