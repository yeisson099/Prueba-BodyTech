import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../features/UserSlice';
import TokenReducer from '../features/TokenSlice';

export default configureStore({
    reducer: {
        user: UserReducer,
        token: TokenReducer

    }
})