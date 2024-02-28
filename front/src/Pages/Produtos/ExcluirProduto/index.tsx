import { useCallback } from "react";
import { useMutation } from "react-query";

import { Delete } from "@mui/icons-material";

import { excluirProduto } from "../../../Api/ProdutosApiService";
import IconButtonTooltip from "../../../Components/IconButtonTooltip";
import { useProdutos } from "../useProdutos";

type ExcluirProdutoProps = {
  idProduto: number;
};
const ExcluirProduto = ({ idProduto }: ExcluirProdutoProps) => {
  // const [openExcluirrProduto, setOpenExcluirrProduto] = useState(false);
  const { atualizarProdutos } = useProdutos();

  const { mutate } = useMutation(() => excluirProduto(idProduto), {
    onSuccess: () => {
      atualizarProdutos();
    },
  });

  const handleClick = useCallback(() => mutate(), [mutate]);

  return (
    <>
      <IconButtonTooltip
        textoTooltip="Excluir"
        onClick={handleClick}
        icon={<Delete color="error" />}
      />
    </>
  );
};

export default ExcluirProduto;
