// export default (req, res) => {
//     res.setHeader('Content-Type', 'application/json')
//     res.statusCode = 200
//     res.end(JSON.stringify({ name: 'Nextjs' }))
//   }

import Link from "next/link";
import fetch from 'isomorphic-unfetch'
import axios from "axios";

export default (req, res) => {
    const {
        query: { tag }
    } = req;

    res.setHeader("Content-Type", "application/json");
    axios.get(`https://www.reddit.com/r/${tag}.json`).then(({ data }) => {
        res.send(JSON.stringify(data));
    });
};