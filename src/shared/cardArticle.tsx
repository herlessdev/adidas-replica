const CardArticle = ({ article }) => {
  return <div className="w-10 h-10">{article && <>
  <div>
    <p>S/ {article?.price}</p>
  </div>
  <p>{article?.name}</p>
  <p> Performance</p>
  </>}</div>;
};

export default CardArticle;
