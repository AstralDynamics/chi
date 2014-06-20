module.exports = function(resources) {
  var tasks = [];

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
      duration: task.duration,
      hidden: false,
      date: Date.now()
    };

    tasks.push(task);
    console.log(tasks);
    // put the task into firebase
  }

  return {
    createTask: createTask,
    tasks: tasks
  }
}
