const country_code: string | undefined = process.env.COUNTRY_CODE;

export const textReplacer = (value: string, replace_item: string) => {
  return value.replaceAll(replace_item, ' ');
};

export const formatNum = (amount: any) => {
  if (!amount) return 0;
  return new Intl.NumberFormat().format(amount);
};

export const getPrice = (amount: number, dollar: boolean) => {
  // const price = code == country_code ? amount : amount / 1600;
  const price = amount;
  const currency = !dollar ? 'NGN' : 'USD';

  return { price, currency };
};

export const twoDecimals = (number: number): number => {
  return Math.round((number + Number.EPSILON) * 100) / 100;
};
