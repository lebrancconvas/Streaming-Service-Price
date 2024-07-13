interface IData {
  data: Data[];
}

interface Data {
  id: number;
  name: string;
  prices: Price;
}

interface Price {
  monthly: PriceModel;
  yearly?: PriceModel;
  trimonthly?: PriceModel;
}

interface PriceModel {
  mobile?: number;
  basic?: number;
  standard: number;
  premium?: number;
}
