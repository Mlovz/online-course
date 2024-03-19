import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <Link to={`/news/${Math.random()}?view=true`}>
        Детальная информация новости
      </Link>
    </div>
  );
};

export default News;
