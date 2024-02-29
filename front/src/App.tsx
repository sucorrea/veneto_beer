import { Suspense } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-BR";

import { router } from "./Routes";

const theme = createTheme({
  palette: {
    background: {
      default: "#EAF1F5",
    },
    primary: {
      main: "#292929",
    },
    secondary: {
      main: "#4e4e4e",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});
const App = () => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-BR">
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
          </Suspense>
        </QueryClientProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
