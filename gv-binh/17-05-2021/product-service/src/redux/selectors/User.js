import { createSelector } from 'reselect';

const getUser = state => state.users

export const userSelector = createSelector(
    getUser,
    users => users
) 