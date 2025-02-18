import DataLoader from "dataloader";

export type MyContext = {
  getTeamplateByIndex: DataLoader<number, any>;
  getAllTemplates: DataLoader<void, any>;
  getWorkflowByIndex: DataLoader<number, any>;
};
