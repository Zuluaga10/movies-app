import { Navigate } from 'react-router-dom'
 
export const PublicRoute = ({ children, user }) => {
  return !!user
    ? <Navigate to='/' />
    : children
 
}