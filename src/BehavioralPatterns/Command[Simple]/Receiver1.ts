import {CommandInterface} from "./CommandInterface";

export class Receiver1 implements CommandInterface {
    execute(): any {
        console.log("Receiver Number 1 was executed");
    }

}