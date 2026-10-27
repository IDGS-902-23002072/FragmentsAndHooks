import { createContext, useContext, useReducer } from "react";
import { useCharacter } from "../useCharacters";

// Sirve como lectura global para comunicar a toda la app
const AuthContext = createContext(null);

export function AuthProvider({children}){
  const { character, loading, error } = useCharacter(1);

return (
    <AuthContext.Provider value={{...estado,login,logout}}>
        {children}
    </AuthContext.Provider>
)

}

export function useAuth(){
return useContext(AuthContext)
}