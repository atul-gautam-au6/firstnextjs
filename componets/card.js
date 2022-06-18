import React from 'react'
import Link from "next/link";

const Card = ({data}) => {
  return (
    <div className="container">
        {data?.map((el) => (
          <div key={el.id} className="items">
            <div key={el.id} className="card">
              <div className="card-details">
                <p className="text-title">{el.title}</p>
                <p className="text-body">{el.body}</p>
              </div>
              <Link href={`/blog/view/${el.id}`}>
                <a className="card-button">More info</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Card