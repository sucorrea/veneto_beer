import { useState } from "react";

import { Close } from "@mui/icons-material";
import Modal from "@mui/material/Modal";

import IconButtonTooltip from "../../../Components/IconButtonTooltip";
const AlterarProduto = () => {
  const [openAlterarProduto, setOpenAlterarProduto] = useState(false);

  return (
    <>
      <IconButtonTooltip
        textoTooltip="Incluir"
        onClick={() => setOpenAlterarProduto(true)}
        icon={<Close color="error" />}
      />
      <Modal
        open={openAlterarProduto}
        onClose={() => setOpenAlterarProduto(false)}
      >
        <>ALTERAR</>
      </Modal>
    </>
  );
};

export default AlterarProduto;
