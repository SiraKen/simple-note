import type { NextApiRequest, NextApiResponse } from "next";
import Note from "../../models/Note";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST" && req.body.title !== "") {
    (async () => {
      try {
        await Note.create({ title: req.body.title, body: req.body.body });
        res.status(200).json({ status: "Success!!" });
      } catch (error) {
        res.status(500).end();
      }
    })();
  } else {
    res.status(500).end();
  }
}
