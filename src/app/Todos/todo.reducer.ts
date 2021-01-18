import { createReducer, on } from '@ngrx/store';
import { todo } from './Models/todo.model';
import { crear } from './todo.actions';

export const initialState : todo[] = [
  new todo('salvar el mundo')
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state,{texto}) => [...state, new todo (texto)]),
 
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}