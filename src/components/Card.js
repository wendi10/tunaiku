import React from 'react'
import ModalDetail from './ModalDetail'

function Card (props) {
  return (
    <>
      <a data-toggle='modal' href={`#modal-detail-${props.index}`}>
        <div className='card-film' id={`card-animation-${props.index}`}>
          <h4>{`${props.data.title} ( eps. ${props.data.episode_id} )`}</h4>
          <h5>{`Director: ${props.data.director}`}</h5>
          <h5>{`Producer: ${props.data.producer}`}</h5>
          <span>{`Release : ${props.data.release_date}`}</span>
        </div>
      </a>

      <ModalDetail detail={props.data} char={props.char} index={props.index} />
    </>
  )
}

export default Card
