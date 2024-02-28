import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useTiposCerveja } from "../../../useTiposCerveja";

const TiposCerveja = () => {
  const { tiposCerveja } = useTiposCerveja();

  return (
    <TextField label="Tipo de Cerveja" select fullWidth variant="filled">
      {tiposCerveja.map((tipoCerveja) => (
        <MenuItem
          key={tipoCerveja.id_tipo_cerveja}
          value={tipoCerveja.id_tipo_cerveja}
        >
          {tipoCerveja.nome_tipo_cerveja}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default TiposCerveja;
