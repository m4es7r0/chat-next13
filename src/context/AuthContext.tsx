import { auth } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

interface IAuthProvider {
  currentUser: User | null;
}

export const AuthContext = createContext<IAuthProvider>({ currentUser: null });

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsb = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsb();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
