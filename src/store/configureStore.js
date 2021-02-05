import prod from '../store/configureStore.prod'
import dev from '../store/configureStore.dev'

export const configureStore = process.env.NODE_ENV === 'production' ? prod() : dev()
export const dispatch = configureStore.dispatch
export default configureStore
