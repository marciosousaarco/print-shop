import { configureStore } from '@reduxjs/toolkit';
import controledSidebar from '../features/sidebar/sidebar';

export default configureStore({
    reducer: {
        controledSidebar
    }
})