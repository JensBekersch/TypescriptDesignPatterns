import {Command} from "./Command";
import {CommandInterface} from "./CommandInterface";
import {Receiver1} from "./Receiver1";
import {Receiver2} from "./Receiver2";

export class ConcreteCommand extends Command {

    protected buildCommands(): void {
        this.addCommand(ConcreteCommand.createMessage1());
        this.addCommand(ConcreteCommand.createMessage2());
    }

    protected static createMessage1(): CommandInterface {
        return new Receiver1();
    }

    protected static createMessage2(): CommandInterface {
        return new Receiver2();
    }

}
