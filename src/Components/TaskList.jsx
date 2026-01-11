import TaskItem from "./TaskItem";

function TaskList({tasks, onDelete, onToggle}){
    if(tasks.length === 0){
        return (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">

                <p>No tasks found. Add one above!</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <TaskItem 
                key={task.id}
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
                />
            ))}
        </div>
    )
}

export default TaskList;