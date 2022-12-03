import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Test } from "./components/Test.component";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Test />
      </QueryClientProvider>
    </div>
  );
}

export default App;
