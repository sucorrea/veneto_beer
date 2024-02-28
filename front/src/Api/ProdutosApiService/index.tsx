import Api from "..";
import { OutProduto } from "./Models/OutProduto";
import { OutTiposCerveja } from "./Models/OutTiposCerveja";

type HttpResponse<T> = {
  data: T;
};

export async function consultarProdutos(): Promise<HttpResponse<OutProduto[]>> {
  const dados: HttpResponse<OutProduto[]> = await Api.get("produtos");

  return dados;
}

export async function excluirProduto(id_produto: number): Promise<void> {
  await Api.delete(`produtos/${id_produto}`);
}
export async function consultarTiposCerveja(): Promise<
  HttpResponse<OutTiposCerveja[]>
> {
  const dados: HttpResponse<OutTiposCerveja[]> = await Api.get("tipos-cerveja");

  return dados;
}
