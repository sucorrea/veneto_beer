import { useCallback } from "react";

import { Formik } from "formik";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import TiposCerveja from "./TiposCerveja";
import { initialValues } from "./utils";
import { AlterarProdutoFormValues } from "./Types";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AlterarProdutoForm = () => {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <Formik<AlterarProdutoFormValues>
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit: handleFormikSubmit }) => (
        <form onSubmit={handleFormikSubmit}>
          <Grid container spacing={2} pt={2}>
            <Grid item xs={12} md={8}>
              <TextField label="Nome do Produto" fullWidth variant="filled" />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Valor" fullWidth variant="filled" />
            </Grid>
            <Grid item xs={12} md={3}>
              <DatePicker
                label="Data de Validade"
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    variant: "filled",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TiposCerveja />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField label="Teor Alcoolico" fullWidth variant="filled" />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField label="Volume" fullWidth variant="filled" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Descrição"
                fullWidth
                multiline
                rows={4}
                variant="filled"
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default AlterarProdutoForm;
