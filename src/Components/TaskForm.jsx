import {useState} from 'react';
import {Plus} from 'lucide-react';

function TaskForm({onAdd}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('General');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title: title,
            description: description,
            category: category,
            date: new Date().toLocaleDateString(),
            isCompleted: false
        };

        onAdd(newTask);

        setTitle('');
        setDescription('');
        setCategory('General');

    };

    return (
        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6'>
            <h2 className='text-lg font-bold text-gray-800 mb-4 flex items-center gap-2'>
                <Plus size={20} className='text-blue-600'/>
                Add New Task
            </h2>

            <form action="" onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <input 
                    type="text" 
                    placeholder='Task title...'
                    className='w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <textarea 
                    name="" 
                    id=""
                    placeholder='Description (optional)'
                    rows="2"
                    className='w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className='flex gap-4'>
                    <select 
                    name="" 
                    id=""
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'
                    >
                        <option value="General">General</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Shopping">Shopping</option>
                    </select>

                    <button
                    type='Submit'
                    className='flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center justify-center gap-2'
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;