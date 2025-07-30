import { HeaderContext } from '@/contexts/header-context';
import { useContext } from 'react';

export function useHeader() {
  return useContext(HeaderContext);
}
