export interface WorkflowModel {
  myid: number;
  name: string;
  type: string;
  properties: WorkflowPropertiesModel;
}
export interface WorkflowPropertiesModel {
  displayName: string;
}
