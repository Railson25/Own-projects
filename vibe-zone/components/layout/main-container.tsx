interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  return <div>{children}</div>;
};
