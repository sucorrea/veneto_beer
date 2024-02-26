import { Close } from "@mui/icons-material";

import IconButtonTooltip from "../../../Components/IconButtonTooltip";
import { useMutation } from "react-query";
import { excluirProduto } from "../../../Api/ProdutosApiService";
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

  const handleClick = () => {
    mutate();
  };

  return (
    <>
      <IconButtonTooltip
        textoTooltip="Excluir"
        onClick={handleClick}
        icon={<Close color="warning" />}
      />
    </>
  );
};

export default ExcluirProduto;
