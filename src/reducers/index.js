/**
 * @author Edward P. Legaspi
 * @since 1.0
 */
import { combineReducers } from 'redux';
import { todos, visibilityFilter } from './Todo.reducer'
import { api } from './API.reducer'

export default combineReducers({
  todos,
  visibilityFilter,
  api
});
