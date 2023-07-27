import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../store';

export const UseTypedSelector : TypedUseSelectorHook<RootState> = useSelector;
