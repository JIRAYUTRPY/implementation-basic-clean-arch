import InMemoryDatabaserService from "../framworks/database/InMemoryDatabaseService.js";
export default () => {
  return {
    service: new InMemoryDatabaserService(),
  };
};
