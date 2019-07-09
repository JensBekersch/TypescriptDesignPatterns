import {ITestA} from "../ITestA";

export class TestLA implements ITestA {
    printMessage(): string {
        return "Message from Test A!";
    }
}