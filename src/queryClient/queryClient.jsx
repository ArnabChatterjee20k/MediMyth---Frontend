import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({defaultOptions:{queries:{
    staleTime:1800000, // 30 mins
    retry:1    
}}})