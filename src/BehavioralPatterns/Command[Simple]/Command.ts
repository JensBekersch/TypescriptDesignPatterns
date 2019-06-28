import {CommandInterface} from "./CommandInterface";

export abstract class Command {

    protected commandQueue: CommandInterface[];

    constructor() {
        this.commandQueue = [];
    }

    public executeCommands(): void {
        this.buildCommands();

        let cmd;
        for (cmd of this.commandQueue) {
            cmd.execute();
        }
    }

    protected abstract buildCommands(): void;

    protected addCommand(cmd: CommandInterface): void {
        this.commandQueue.push(cmd);
    }

}
