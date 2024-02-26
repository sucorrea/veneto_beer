import { useState } from "react";

import { Edit } from "@mui/icons-material";
import Modal from "@mui/material/Modal";

import IconButtonTooltip from "../../../Components/IconButtonTooltip";
const ExcluirrProduto = () => {
  const [openExcluirrProduto, setOpenExcluirrProduto] = useState(false);

  return (
    <>
      <IconButtonTooltip
        textoTooltip="Incluir"
        onClick={() => setOpenExcluirrProduto(true)}
        icon={<Edit color="info" />}
      />
      <Modal
        open={openExcluirrProduto}
        onClose={() => setOpenExcluirrProduto(false)}
      >
        <>ExcluirR</>
      </Modal>
    </>
  );
};

export default ExcluirrProduto;
