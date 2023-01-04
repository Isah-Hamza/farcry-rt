import { Login, Register } from "../services/auth";

export const useAuth = ({}) => {
  const handleRegister = (data) => {
    return new Promise((resolve, reject) => {
      Register(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  };
  const handleLogin = (data) => {
    return new Promise((resolve, reject) => {
      Login(data)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => reject(e));
    });
  };

  return { handleRegister, handleLogin };
};
