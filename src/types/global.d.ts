type OriginalSellsDataAPI = {
  id: string;
  nome: string;
  preco: number;
  status: "processando" | "pago" | "falha";
  parcelas: null | number;
  data: string;
  pagamento: string;
};

type FormatedSellsDataAPI = {
  id: string;
  parcelas: number;
  status: "processando" | "pago" | "falha";
  nome: string;
  precoNumber: number;
  precoMoeda: string;
  data: Date;
  pagamento: string;
};
