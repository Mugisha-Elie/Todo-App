import {Check, Trash2, Edit2, Calendar} from 'lucide-react'

function TaskItem({task, onDelete, onToggle}){
    const {id, title, description, category, date, isCompleted} = task;

    return (
        <div className='group bg-white p-4 round-xl shadow-sm border-gray-100 flex items-start gap-4 mb-3 transition-shadow hover:shadow-md'>

            <button 
            onClick={() => onToggle(id)}
            className={`mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${isCompleted ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 hover:border-blue-400'}`}
            >
                {isCompleted && <Check size={14} strokeWidth={5} />}
            </button>

            <div className='flex-1'>

                <h3 className={`font-semibold text-gray-800 ${isCompleted ? 'line-through text-gray-400' : ''}`}>
                    {title}
                </h3>

                {description && (
                    <p className={`text-sm mt-1 ${isCompleted ? 'text-gray-300' : 'text-gray-500'}`} >
                        {description}
                    </p>
                )}

                <div className='flex items-center gap-3 mt-3'>
                    <span className='bg-gray-100 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-md'>
                        {category}
                    </span>

                    <div className='flex items-center gap-1 text-xs text-gray-400 font-medium'>
                        <Calendar size={12}/>
                        <span>{date}</span>
                    </div>
                </div>
            </div>

            <div className='flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>

                <button className='p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors'>

                    <Edit2 size={16}/>
                </button>

                <button 
                onClick={() => onDelete(id)}
                className='p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors'
                >
                
                    <Trash2 size={16}/>
                </button>
            </div>


        </div>
    )
}

export default TaskItem