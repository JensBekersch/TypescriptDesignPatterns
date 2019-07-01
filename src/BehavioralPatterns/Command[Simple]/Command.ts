export namespace Commands {

    export interface ICommand {
        execute(): void;
    }

    export abstract class Command {

        protected commandQueue: ICommand[];

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

        protected addCommand(cmd: ICommand): void {
            this.commandQueue.push(cmd);
        }

    }

}
