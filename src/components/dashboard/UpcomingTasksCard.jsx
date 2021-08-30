import { CreateOutlined, DeleteOutlined, DoneAll } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import DisplayCard from '../common/DisplayCard';

const UpComingTasksCard = () => {
    return (
        <DisplayCard header="Upcoming Tasks">
            <div className="dashboard__body__container">
                <div className="task">
                    <span className="bullet"></span>
                    <p class="taskDetails">Lorem ipsum dolor sit amet.</p>
                    <div className="actions">
                        <DoneAll />
                        <CreateOutlined />
                        <DeleteOutlined />
                    </div>
                </div>

                <div className="task">
                    <span className="bullet"></span>
                    <p class="taskDetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laboriosam similique explicabo ullam neque minima officiis nihil tenetur repudiandae voluptatibus.</p>
                    <div className="actions">
                        <DoneAll />
                        <CreateOutlined />
                        <DeleteOutlined />
                    </div>
                </div>

                <div className="task">
                    <span className="bullet"></span>
                    <p class="taskDetails">Lorem ipsum dolor sit amet.</p>
                    <div className="actions">
                        <DoneAll />
                        <CreateOutlined />
                        <DeleteOutlined />
                    </div>
                </div>

                <div className="task">
                    <span className="bullet"></span>
                    <p class="taskDetails">Lorem ipsum dolor sit amet.</p>
                    <div className="actions">
                        <DoneAll />
                        <CreateOutlined />
                        <DeleteOutlined />
                    </div>
                </div>

                <div className="task">
                    <span className="bullet"></span>
                    <p class="taskDetails">Lorem ipsum dolor sit amet.</p>
                    <div className="actions">
                        <DoneAll />
                        <CreateOutlined />
                        <DeleteOutlined />
                    </div>
                </div>
            </div>
            <Link to="/app/current">
                <p className="allTasksLink">VIEW ALL TASKS</p>
            </Link>
        </DisplayCard>
    )
}

export default UpComingTasksCard;