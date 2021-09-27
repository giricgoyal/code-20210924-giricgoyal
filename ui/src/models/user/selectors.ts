export const getUser = (state) => state?.user

export const getUserName = (state) => getUser(state)?.name
