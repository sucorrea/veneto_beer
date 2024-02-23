import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
