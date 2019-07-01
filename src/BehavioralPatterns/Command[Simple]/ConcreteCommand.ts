import {Receiver1} from "./Receiver1";
import {Receiver2} from "./Receiver2";
import {Commands} from "./Command";
import ICommand = Commands.ICommand;
import Command = Commands.Command;

export class ConcreteCommand extends Command {

    protected buildCommands(): void {
        this.addCommand(ConcreteCommand.createMessage1());
        this.addCommand(ConcreteCommand.createMessage2());
    }

    protected static createMessage1(): ICommand {
        return new Receiver1();
    }

    protected static createMessage2(): ICommand {
        return new Receiver2();
    }

}
