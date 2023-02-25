let tasks = [];
export function getAllTasks(req,res) {
    res.status(200).json({'All tasks is this':'otbiasmareoc'});
}
export function getTasksById(req, res) {}

export function createTasks(req, res) {
    const {title,description} = req.body;
    if(!title || !description) {
        res.status(404).json({message:'not valid task format'});
        return;
    }
    tasks.push({
        id: tasks.length + 1,
        title,
        description
    })
    res.status(201).json({message:'task crated successfully',tasks})
}

export function deleteTasks(req, res) {}

export function updateTasks(req, res) {}
