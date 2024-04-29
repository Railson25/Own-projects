import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
import { AuthProvider } from "./context/auth-context";
import { QueryProvider } from "./lib/react-query/query-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>
  </BrowserRouter>
);
