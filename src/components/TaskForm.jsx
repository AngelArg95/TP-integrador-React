function Input ({ onAddTask }){
    const handleSubmit = (e) =>{
       e.preventDefault();
       const todoForm = new FormData(e.target);
       const description = todoForm.get("description");
       onAddTask(description);
       e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="description" id="inputLabel">New Task </label>
            <input type="text" name="description" placeholder="Buy some milk"  id="description" required></input>
            <input id="addTask" type="submit" value="Add task"></input>
        </form>
    )
}
export default Input