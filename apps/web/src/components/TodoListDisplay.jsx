function TodoListDisplay({todoList, onToggle, onDelete}) {
    if (!Array.isArray(todoList) || todoList.length === 0) {
        return <div className="text-gray-500 mt-3">No todos yet.</div>;
    }

    return (
        <ul className="mt-3 space-y-2">
            {todoList.map((t) => (
                <li
                    key={t.uuid}
                    className="flex items-center gap-3 p-2 border rounded-md"
                >
                    <input
                        type="checkbox"
                        checked={t.finished ?? true}
                        onChange={() => onToggle(t.uuid)}
                        className="w-5 h-5"
                    />

                    <span className={t.finished ? "line-through text-gray-400" : ""}>
                        {t.content}
                    </span>

                    <button
                        onClick={() => onDelete(t.uuid)}
                        className="ml-auto bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoListDisplay;
