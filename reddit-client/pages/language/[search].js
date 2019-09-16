import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  const { search } = router.query;
  const [languages, searchLanguage] = useState([]);

  useEffect(() => {
    axios.get(`/api/discussions/${search}`)
      .then(res => searchLanguage(res.data.data.children.map(obj => obj.data)));
  }, [search]);

  return (
    <>
      <h1>See {search} language details</h1>
      {languages.map(language =>
        <ul>
          <h3>{language.title}</h3>
          <p>{language.selftext}</p>
        </ul>
      )}

      <style jsx>{`
        h1{
          text-align: center;
        }
        ul {
          background-color: gray;
          color: black;
          border-bottom-left-radius: 20px;
          min-height: 50px;
        }
      `}</style>
    </>
  )
}