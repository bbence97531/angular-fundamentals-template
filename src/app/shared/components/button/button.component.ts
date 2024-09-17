import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
    @Input() text?: string;
    @Input() iconName?: IconDefinition;

    constructor(library: FaIconLibrary) {
        library.addIcons(faPencil);
}
}