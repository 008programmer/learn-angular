import { Component } from "@angular/core";
import { Logger } from "../logger.service";

@Component({
    selector: 'hello-world',
    templateUrl: './hello-world.component.html',
    styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
    count: number = 0;
    constructor(private Logger: Logger)
    {}

    isEditable = true;
    toggleEditable(){
        this.isEditable = !this.isEditable;
        this.onLogMe();
    }

    onLogMe(){
        this.Logger.writeCount(this.count);
        this.count += 1;
    }
}