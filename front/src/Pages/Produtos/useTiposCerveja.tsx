import { useQuery } from "react-query";
import { consultarTiposCerveja } from "../../Api/ProdutosApiService";

export const useTiposCerveja = () => {
  const { data, isLoading } = useQuery(["tipos-cerveja"], () =>
    consultarTiposCerveja()
  );

  return { tiposCerveja: data?.data || [], isLoading };
};
