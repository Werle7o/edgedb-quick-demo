import * as edgedb from "edgedb";
import e from "../../dbschema/edgeql-js";

const client = edgedb.createClient();

export default async function handler(req, res) {
  const query = e.select(e.Movie, (m) => (
    {
      title: true,
      release_year: true,
    }
  ));

  res.status(200).json(await query.run(client));
}
