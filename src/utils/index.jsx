const rupiahFormat = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json",
  },
});

export { rupiahFormat };
