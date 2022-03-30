import {Employee} from "../../../../api-interfaces/src";

export interface City {
  cid: string;
  name: string;
  projectsIds?: string[];
  employees: Employee;
}
