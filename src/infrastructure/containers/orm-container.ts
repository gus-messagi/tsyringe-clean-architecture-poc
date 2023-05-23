import { container } from "tsyringe";
import { Orm } from "../data/orm";

const orm = new Orm()

container.registerInstance("Orm", orm)