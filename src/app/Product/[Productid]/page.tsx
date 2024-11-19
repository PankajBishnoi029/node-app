import { Metadata } from "next";
type Props = {
  params: { Productid: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`samsung costs around ${params.Productid}`);
    }, 100);
  });
  return {
    title: `${title}`,
  };
};

export default function Product({ params }: Props) {
  return (
    <>
      <h1>hii buddy</h1>
      <h1>welcome to title samsung layout page</h1>
      <h1>this isb your price : {params.Productid}</h1>
      <br />
      <h1>
        there is a magic when ever you enter the price it change in title{" "}
      </h1>
    </>
  );
}
