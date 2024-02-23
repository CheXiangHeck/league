import "./layout.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex justify-center items-center bg-cover bg-center background-auth cursor-default">
      {children}
    </div>
  );
};

export default AuthLayout;
