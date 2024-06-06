import { PrismaClient, bike } from "@prisma/client";
import { NextPageContext } from "next";
import SuperJSON, { SuperJSONResult } from "superjson";

const prisma = new PrismaClient();

export async function getServerSideProps(context: NextPageContext) {
  const brand = context.query.brand as string;

  let bikes: bike[] = [];

  // Fetch data from external API
  if (brand == "allbikes") bikes = await prisma.bike.findMany();
  else
    bikes = await prisma.bike.findMany({
      where: {
        brand: brand,
      },
    });

  console.log(bikes);

  let x = SuperJSON.serialize(bikes);
  console.log(typeof x);

  // Pass data to the page via props
  return { props: { bikes: x } };
}

export default function Bikes({ bikes }: { bikes: SuperJSONResult }) {
  console.log(bikes);

  const bikes2 = SuperJSON.deserialize(bikes) as bike[];

  return (
    <div>
      {bikes2.map((bike) => (
        <div key={bike.id} className="text-4xl">
          <h1>name: {bike.name}</h1>
          <p>price: {bike.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
