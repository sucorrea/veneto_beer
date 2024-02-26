import { useState } from "react";

import { Edit } from "@mui/icons-material";
import Modal from "@mui/material/Modal";

import IconButtonTooltip from "../../../Components/IconButtonTooltip";
const AlterarProduto = () => {
  const [openAlterarProduto, setOpenAlterarProduto] = useState(false);

  return (
    <>
      <IconButtonTooltip
        textoTooltip="Incluir"
        onClick={() => setOpenAlterarProduto(true)}
        icon={<Edit color="info" />}
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
