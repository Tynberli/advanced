(function () {
    'use strict';

    class Task {
        constructor(message) {
            this.message = message;
        }

        run() {
            console.log(this.message);
        }
    }

    class User {
        constructor(task) {
            this.task = task;
        }

        do() {
            this.task.run();
        }
    }

    const myTask = new Task('Hello, I am a task!');
    const myUser = new User(myTask);

    myUser.do();

})();
