import { Input } from '@material-ui/core';
import { Close, CloudCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import '../../styles/components/Tasks.scss';
import Dropdown from './Dropdown';

const Tasks = ({ children, editable }) => {

    const [ showModal, setShowModal ] = useState(false);

    const close = (action, e) => {
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();
        if(action) {
            setShowModal(false);
        }
    }

    const Modal = (
        <div className="modal" onClick={(e) => close(true, e)}>
            <div className="modal__popup" onClick={(e) => close(false, e)}>
                <div className="modal__heading">
                    {!editable ? 
                    (
                        <h2>Some heading</h2>
                    ) : 
                    (
                        <input placeholder="Some heading"></input>
                    )}
                </div>
                <div className="modal__tags">
                    <div className="modal__tag">
                        <span className="key">Created :</span>
                        <span className="value">02 Jan 2021</span>
                    </div>
                    <div className="modal__tag">
                        <span className="key">Completed :</span>
                        <span className="value">02 Jan 2021</span>
                    </div>
                    <div className="modal__tag">
                        <span className="key">Tag :</span>
                        <span className="value">Productivity</span>
                    </div>
                </div>
                <div className="modal__notes">
                    <h3>Notes</h3>
                    <div hidden={editable} className="notes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus officia, sint ut labore magnam fugiat impedit! Cum, ipsam. Ad repudiandae delectus voluptates, cupiditate vero maiores. Natus perferendis nihil aspernatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint illum alias consectetur fugiat itaque quam. Culpa iste sit quas! Amet quidem voluptatum ipsam distinctio pariatur enim dicta sit temporibus consectetur eaque autem perspiciatis tempore ex suscipit quaerat assumenda quod illum dignissimos, omnis eos consequatur magni neque. Illo pariatur ullam asperiores.</div>
                    <textarea hidden={!editable}  className="notes" placeholder="Add some notes"></textarea>
                </div>
                <div className="modal__button">
                    <span className="modal__close" onClick={() => setShowModal(false)}>Cancel</span>
                    <span>{editable ? 'Create task' : 'Reopen task'}</span>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <span onClick={() => setShowModal(true)}>
                {children}
            </span>
            {showModal ? (
                Modal
            ) : null}
        </div>
    )
}

export default Tasks;