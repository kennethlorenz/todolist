export default class Todo {
  constructor(title, details, dueDate, priority, checked, index) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = checked;
    this.index = index;
  }
}
