import { Close } from '@material-ui/icons';
import React, { useState } from 'react';
import '../../styles/components/Tasks.scss';

const Tasks = ({ children }) => {

    const [ showModal, setShowModal ] = useState(false);

    const Modal = (
        <div className="modal">
            <span><Close onClick={() => setShowModal(false)}/></span>
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