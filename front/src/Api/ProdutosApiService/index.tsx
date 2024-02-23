import Api from "..";
import { OutProduto } from "./Models/OutProduto";

type HttpResponse<T> = {
  data: T;
};

export async function consultarProdutos(): Promise<HttpResponse<OutProduto[]>> {
  const dados: HttpResponse<OutProduto[]> = await Api.get("produtos");

  return dados;
}
