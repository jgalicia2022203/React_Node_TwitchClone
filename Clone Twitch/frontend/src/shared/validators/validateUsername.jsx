export const validateUsername = (username) => {
    const regex = /^\S{3,8}$/

    return regex.test(username)
}

export const validateUsernameMessage = 'The username need to have min 3 and max 8 characters with no spaces'