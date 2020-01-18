import React from 'react'
import isEmpty from 'lodash/isEmpty'

function ModalDetail (props) {
  if (!isEmpty(props.detail)) {
    return (
      <div className='modal fade' tabIndex='-1' role='dialog' id={`modal-detail-${props.index}`}>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>{props.detail.title}</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <h6>Sinopsis : </h6>
              <p>{props.detail.opening_crawl}</p>

              <h6>Karakter : </h6>
              <ul>
                {
                  !isEmpty(props.char)
                    ? props.char.map((data, index) => {
                      return (
                        <li key={index}>{data}</li>
                      )
                    })
                    : <div>Sedang Mengunduh Data ...</div>
                }
              </ul>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalDetail
