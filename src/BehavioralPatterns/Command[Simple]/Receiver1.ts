import {Commands} from "./Command";
import ICommand = Commands.ICommand;

export class Receiver1 implements ICommand {
    execute(): any {
        console.log("Receiver Number 1 was executed");
    }
}
