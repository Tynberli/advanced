'use strict';
import { Task } from './task.js';
import { User } from './user.js';

const myTask = new Task('Привет');
const myUser = new User(myTask);

myUser.do();
