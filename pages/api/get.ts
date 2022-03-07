import type { NextApiRequest, NextApiResponse } from "next";
import Note from "../../models/Note";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    (async () => {
      try {
        const data = await Note.findAll({ order: [["createdAt", "desc"]] });
        res.status(200).json(data);
      } catch (error) {
        res.status(500).send(error);
      }
    })();
  } else {
    res.status(500).end();
  }
}
