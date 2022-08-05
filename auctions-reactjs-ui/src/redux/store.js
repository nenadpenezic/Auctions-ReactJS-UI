import {configureStore} from '@reduxjs/toolkit';
import accountSlice from './reducers/accountSlice';

export default configureStore({
    reducer:{
        account:accountSlice
    }
})