import { DataSource } from "typeorm";
import connectionOptions from "./orm-config";

const typeorm = new DataSource(connectionOptions);

export default typeorm;
