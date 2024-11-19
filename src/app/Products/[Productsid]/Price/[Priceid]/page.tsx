export default function input({
  params,
}: {
  params: {
    Productsid: string;
    Priceid: string;
  };
}) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {params.Productsid}</p>
      <p>Price ID: {params.Priceid}</p>
    </div>
  );
}
