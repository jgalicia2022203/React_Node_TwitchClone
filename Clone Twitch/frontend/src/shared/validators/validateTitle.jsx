export const validateTitle = (title) => {
    return title.length >=3 && title.length<=30
}

export const validateTitleMessage = 'The title must have a min 3 and max 30 characters'