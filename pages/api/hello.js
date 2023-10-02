/**
 * Created by slhenty on 2023-10-1.
 */
import {nameCase} from "../../lib/utils";

export default function handler(req, res) {
  res.status(200).json({ text: `Hello, ${req.query.name && nameCase(req.query.name) || 'Chief'}!` });
}
