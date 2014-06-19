module.exports = function(icons, colors) {
  
  function createTask(task) {
    var defaults, task;
    
    defaults = {
      title: 'Untitled task',
      icon: icons.__default__,
      color: colors.__default__
    }

    task = {
      title: task.title || defaults.title,
      description: task.description,
      task.icon: task.icon || defaults.icon,
      task.color: task.color || defaults.color,
      duration: task.duration,
      hidden: false,
      date: Date.now()
    }

    // put the task into firebase
  }

  return {
    createTask: createTask
  }
}
