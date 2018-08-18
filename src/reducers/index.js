/**
 * @author Edward P. Legaspi
 * @since 1.0
 */
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { todos, visibilityFilter } from './Todo.reducer'

export default combineReducers({
  todos,
  visibilityFilter,
  form
});
