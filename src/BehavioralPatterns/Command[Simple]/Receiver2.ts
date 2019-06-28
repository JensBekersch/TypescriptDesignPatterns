import {CommandInterface} from "./CommandInterface";

export class Receiver2 implements CommandInterface {
    execute(): any {
        console.log("Receiver Number 2 was executed");
    }

}