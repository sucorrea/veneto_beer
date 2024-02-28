import { useState } from "react";

import { Edit } from "@mui/icons-material";

import IconButtonTooltip from "../../../Components/IconButtonTooltip";
import Modal from "../../../Components/Modal";
import AlterarProdutoForm from "./AlterarProdutoForm";

type AlterarProdutoProps = {
  idProduto: number;
};
const AlterarProduto = ({ idProduto }: AlterarProdutoProps) => {
  const [openAlterarProduto, setOpenAlterarProduto] = useState(false);

  return (
    <>
      <IconButtonTooltip
        textoTooltip="Alterar"
        onClick={() => setOpenAlterarProduto(true)}
        icon={<Edit color="primary" />}
      />
      <Modal
        title="Alterar Produto"
        open={openAlterarProduto}
        onClose={() => setOpenAlterarProduto(false)}
        maxWidth="md"
      >
        <AlterarProdutoForm />
      </Modal>
    </>
  );
};

export default AlterarProduto;
