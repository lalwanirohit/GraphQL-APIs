export const generateErrorResponse = (message = "Something went wrong.") => {
    return {
        "message": message,
        "success": false,
        "data": {},
    }
}

export const generateSuccessResponse = (message, success, data) => {
    return {
        "message": message,
        "success": success,
        "data": data,
    }
}