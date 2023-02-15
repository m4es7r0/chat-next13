import { auth } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
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
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const unsb = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        if (path === "/login" || "/registration") router.replace("/");
      } else {
        setCurrentUser(null);
        router.replace(path !== "/registration" ? "login" : "registration");
      }
    });

    return () => unsb();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
