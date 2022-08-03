import { ProjectFactory } from "./ProjectFactory";

const ToDoList = () => {
    const projectList = [];
    const defaultList = ProjectFactory('Default'); 
    projectList.push(defaultList);

    function createProject(title) {
            const newProject = ProjectFactory(title);
            projectList.push(newProject);

    }

}