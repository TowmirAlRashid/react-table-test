import { Stack } from "@mui/material";
import TableCard from "./components/TableCard";
import TopLayer from "./components/TopLayer";


function App() {
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: '4rem',
        mb: '4rem'
      }}
      spacing={4}
    >
      <TopLayer />

      <TableCard />
    </Stack>
  );
}

export default App;
