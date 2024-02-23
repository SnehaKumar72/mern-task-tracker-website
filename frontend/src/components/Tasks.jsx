import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from './utils/Loader';
import Tooltip from './utils/Tooltip';

const Tasks = () =>  {
  const authState = useSelector(state => state.authReducer);
  const [tasks, setTasks] = useState([]);
  const [fetchData, { loading }] = useFetch();

  const fetchTasks = useCallback(() => {
    const config = { url: "/tasks", method: "get", headers: { Authorization: authState.token } };
    fetchData(config, { showSuccessToast: false }).then(data => setTasks(data.tasks));
  }, [authState.token, fetchData]);

  useEffect(() => {
    if (!authState.isLoggedIn) return;
    fetchTasks();
  }, [authState.isLoggedIn, fetchTasks]);

  const handleDelete = (id) => {
    const config = { url: `/tasks/${id}`, method: "delete", headers: { Authorization: authState.token } };
    fetchData(config).then(() => fetchTasks());
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <>
      <div className="my-2 mx-auto max-w-[900px] py-4 px-10">
        {tasks.length !== 0 && <h2 className='my-2 ml-2 md:ml-0 text-2xl'>Task List ({tasks.length})</h2>}
        {loading ? (
          <Loader />
        ) : (
          <div>
            {tasks.length === 0 ? (
              <div className='w-[800px] h-[300px] flex items-center text-2xl text-gray-1000 justify-center gap-4'>
                <span>Task list is empty</span>
                <Link to="/tasks/add" className="bg-blue-500 text-white text-2xl hover:bg-blue-500 font-medium rounded-md px-4 py-2">+ Add new task</Link>
              </div>
            ) : (
              tasks.map((task, index) => (
                <div key={task._id} className='bg-aqua-100 my-4 p-4 text-gray-1000 rounded-md shadow-md'>
                  <div className='flex'>
                    <span className='font-medium'>To-Do{index + 1}</span>
                    <Tooltip text={"Edit this task"} position={"top"}>
                      <Link to={`/tasks/${task._id}`} className='ml-auto mr-2 text-blue-600 cursor-pointer'>
                        <i className="fa-solid fa-pen"></i>
                      </Link>
                    </Tooltip>
                    <Tooltip text={"Delete this task"} position={"top"}>
                      <span className='text-red-400 cursor-pointer' onClick={() => handleDelete(task._id)}>
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </Tooltip>
                  </div>
                  <div className='whitespace-pre'>{task.description}</div>
                  <div className='text-xs text-gray-700 mt-2'>Added: {formatDate(task.createdAt)}</div> {/* Display date and time */}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Tasks;
