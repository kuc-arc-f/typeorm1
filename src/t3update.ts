import "reflect-metadata";
import {createConnection, getRepository } from "typeorm";
import {Task} from "./entity/Task";

//
async function test(){
  const connection =  await createConnection();
  const task = new Task();
  const taskRepository = getRepository(Task)
  const taskOne = await taskRepository.findOne(2);
  taskOne.title = "t2ddd";
  await taskRepository.save(taskOne)
  const tasks = await connection.manager.find(Task);
console.log( tasks);
}
test();
