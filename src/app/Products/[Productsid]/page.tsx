export default function Productid({
  params,
}: {
  params: { Productsid: string };
}) {
  return (
    <>
      <h1>hii from product id</h1>
      <h1>this is your productid {params.Productsid}</h1>
    </>
  );
}
