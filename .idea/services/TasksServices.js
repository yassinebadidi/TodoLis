class TasksServices {

    tasks = ["Mettre en place une architecture modulaire ES6",
        "Mettre en place un fichier service.mjs contenant un CRUD sur un tableau de tâches",
        "Récupérez les tâches grâce au service et affichez les",
        "Une fois les tâches affichées, implémentez la suppression d'une tâche",
        "Lorsque je coche une tache, implémentez ce changement d'état sur le serveur",
        "Implémentez la création d'une tâche via une deuxième page",
        "Mettre en place json-server (trouvable sur github)",
        "Dans le service, utilisez désormais l'API Fetch afin de ne plus utiliser le tableau",
        "Adaptez votre code pour que les modifications soient effectives coté serveur",
        "BONUS : affichez le détail d'une tâche sur une nouvelle page lors du clic sur celle-ci."
    ];

    getTasks = () => {
        // Pour utiliser fetch et le fichier data on se débarasse du tableau tasks
        // return fetch("./data/data.json").then((response => response.json))

        // Pour utiliser le tableau tasks directement sans passer par fetch
        return this.tasks;
    }
    getIndexFromTable = (task) => {
        return this.tasks.indexOf(task);
    }

    deletTask = (index) => {
        this.tasks.splice(index,1);
    };
    async updateTaskStatus(checkbox) {
        const taskId = checkbox.parentNode.getAttribute('task-id');
        const taskStatus = checkbox.checked ? 'Tâche Complété' : 'Tâche en attente';

        const response = await fetch(`/api/tasks/${taskId}`, {
            method: 'PUT',
            body: JSON.stringify({status: taskStatus}),
            headers: {
                'content-Type': 'applcation/json'
            }
        });
        if (!response.ok) {
            console.error(`Échec de la mise à jour de l'état de la tâche`);
            return;
        }
        console.log('État de la tâche mis à jour avec succès');
    }

}

export {TasksServices};