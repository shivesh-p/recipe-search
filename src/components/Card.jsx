/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Card({
  data: { id, name, thumbnail_url, tags, total_time_minutes },
}) {
  const navigate = useNavigate();

  function navigateToRecipe() {
    navigate(`/recipe/${id}/instrunctions`);
  }
  return (
    <div className="card" onClick={navigateToRecipe}>
      <img src={thumbnail_url} alt="" />
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            <p>
              {tags
                .map((t) => t.display_name)
                .slice(0, 2)
                .join(",")}
            </p>
          </div>
          {total_time_minutes ? (
            <p className="time-text">{total_time_minutes}min</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
