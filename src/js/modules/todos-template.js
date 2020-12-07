import generateElement from './element-generator';

const toDoTemplate = (task) => {
  const box = generateElement('li', 'projects-list__item');
  box.setAttribute('data-id', task.getId());
  const priority = generateElement(
    'div',
    'projects-list__priority',
    `${task.getPriority()}`,
  );
  const title = generateElement('span', 'projects-list__name');
  title.textContent = `${task.getTitle()}`;
  const time = generateElement('span', 'projects-list__time');
  time.textContent = `${task.getDueDate()}`;
  const deleteButton = generateElement('i', 'fas', 'fa-trash');
  box.append(
    priority,
    generateElement('div', 'projects-list__checkbox'),
    title,
    time,
    deleteButton,
  );
  return box;
};

export default toDoTemplate;
