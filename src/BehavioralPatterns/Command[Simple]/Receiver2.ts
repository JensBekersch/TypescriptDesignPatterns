import {Commands} from "./Command";
import ICommand = Commands.ICommand;

export class Receiver2 implements ICommand {
    execute(): any {
        console.log("Receiver Number 2 was executed");
    }
}
