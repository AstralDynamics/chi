module.exports = function(resources) {
  var tasks, editableTask;

  tasks = [];

  function createTask(task) {
    var defaults, task;

    defaults = {
      title: 'Untitled task',
      icon: resources.icons.__default__,
      color: resources.colors.__default__
    };

    task = {
      title: task.title || defaults.title,
      description: task.description,
      icon: task.icon || defaults.icon,
      color: task.color || defaults.color,
      duration: parseInt(task.duration),
      hidden: false,
      date: Date.now(),
      due: Date.now() + parseInt(task.duration * 60000)
    };

    tasks.push(task);

    // put the task into firebase
  }

  function editTask(task) {
    editableTask = task;
  }

  function flushEdit() {
    editableTask = null;
  }

  return {
    createTask: createTask,
    editTask: editTask,
    flushEdit: flushEdit,
    tasks: tasks,
    editableTask: editableTask
  }
}
