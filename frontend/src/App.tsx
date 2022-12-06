import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { GoogleSignIn } from "./components/GoogleSignIn.component";
import { Test } from "./components/Test.component";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <p>HRMasdf</p>
        <Test />
        <GoogleSignIn />
      </QueryClientProvider>
    </div>
  );
}

export default App;
