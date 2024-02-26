import { useQuery } from "react-query";
import { consultarProdutos } from "../../Api/ProdutosApiService";

export const useProdutos = () => {
  const { data, isLoading, refetch } = useQuery(["produtos"], () =>
    consultarProdutos()
  );

  return { produtos: data?.data || [], isLoading, atualizarProdutos: refetch };
};
