export const ResponseFormat = (statusCode:number, message: string[] = [], error: string= '') => {
    return {
        message,
        error,
        statusCode,
    }
}