import { AbstractFailure } from "../../domain/failure";

export default class ProjectCardFailure extends AbstractFailure {
   static  nameTooLong = new ProjectCardFailure(
    "1",
    "Name should not exceed 15 characters." 
  );

   static  emptyName = new ProjectCardFailure(
    "2",
    "Name cannot be empty."
  );

}

// ProjectCardFailure.nameTooLong