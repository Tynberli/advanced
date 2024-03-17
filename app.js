'use strict';
import { Task } from './task.js';
import { User } from './user.js';

const myTask = new Task('Hello, I am a task!');
const myUser = new User(myTask);

myUser.do();
