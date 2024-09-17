import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-course-list",
    templateUrl: "./course-list.component.html",
    styleUrls: ["./course-list.component.scss"],
})
export class CourseListComponent {
    @Input() courses: {
        title: string;
        description: string;
        creationDate: Date;
        duration: number;
        authors: string[];
    }[] = [];
    @Input() editable: boolean = false;

    @Output() showCourse = new EventEmitter<number>();
    @Output() editCourse = new EventEmitter<number>();
    @Output() deleteCourse = new EventEmitter<number>();

    onShowCourse(index: number) {
        this.showCourse.emit(index);
    }

    onEditCourse(index: number) {
        this.editCourse.emit(index);
    }

    onDeleteCourse(index: number) {
        this.deleteCourse.emit(index);
    }

    faTrashCan = faTrashCan;
    faPencil = faPencil;
}