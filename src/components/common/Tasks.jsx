import { Input } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { useState } from 'react';
import '../../styles/components/Tasks.scss';
import Dropdown from './Dropdown';

const Tasks = ({ children }) => {

    const [ showModal, setShowModal ] = useState(false);
    const editable = !true;

    const Modal = (
        <div className="modal">
            <span className="modal__close"><Close onClick={() => setShowModal(false)}/></span>
            <div className="modal__body">
                <div className="modal__bodyLeft">
                    <h2 className={editable ? 'editable' : null} contentEditable={editable}>Some Title</h2>
                    <h4>Notes</h4>
                    <p className={editable ? 'editable' : null} contentEditable={editable}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempora accusamus adipisci officiis aut dolor sit cum obcaecati odit id corrupti, natus deserunt eum, amet perspiciatis distinctio, quia iusto voluptatem? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates reiciendis placeat exercitationem ex quisquam labore vel asperiores maiores veritatis dicta vero sed itaque cupiditate praesentium, totam nostrum laboriosam deserunt corrupti. lorem </p>
                </div>
                <div className="modal__bodyRight">
                    <h4>Tags</h4>
                    {
                        editable ? <Dropdown options={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']} className="modal__dropdown" /> : 
                        (
                            <p className={editable ? 'editable' : null}>Some tag</p>
                        )
                    }
                    <h4>Complete by</h4>
                    {
                        editable ? <Input type="date"/> : 
                        (
                            <p className={editable ? 'editable' : null}>20th Jan, 2021</p>
                        )
                    }
                    <button>Close task</button>
                </div>
            </div>
            <div className="modal__footer">
                <span onClick={() => setShowModal(false)}>Add task</span>
            </div>
        </div>
    )

    return (
        <div>
            { React.cloneElement( children, { onClick: () => setShowModal(true) } ) }
            {showModal ? (
                Modal
            ) : null}
        </div>
    )
}

export default Tasks;