import React from "react";

function Pagination(props) {
  const cards = [];
  for (
    let place = 1;
    place <= Math.ceil(props.totalCards / props.listPerPage);
    place++
  ) {
    cards.push(place);
  }

  return (
    <nav>
      <ul className="pagination pagination-lg">
        {cards.map((num) => (
          <li className="page-item " key={num}>
            <a
              href="!#"
              className="page-link"
              onClick={() => props.paginate(num)}
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;