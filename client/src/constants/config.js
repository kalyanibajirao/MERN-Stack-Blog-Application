//API NOTOFICATION MESSAGES

export const API_NOTIFICATION_MESSAGE = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded, please wait"
    },
    success: {
        title: "Success",
        message: "Data Successfully loaded"
    },
    responseFailure: {
        title: "Error",
        message: "An error occured while fetching response from the server"
    },
    requestfailure: {
        title: "Error",
        message: "An error occured while parsing request data"
    },
    networkError: {
        title: "Error",
        message: "Unable to connect with server, please check internet connectivity"
    }
}

///
//API SERVICE CALL
export const SERVICE_URLS = {
    userSignup : {url: '/signup', method: "POST"},
    userLogin : {url: '/login', method: "POST"}
}