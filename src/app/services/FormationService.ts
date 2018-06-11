import Formation from "../model/Formation";
import { Injectable } from "@angular/core";
import FormationApi from "./formation.api";

@Injectable()
export default class FormationService{

    constructor(private formationApi:FormationApi){

    }
    getFormations():Promise<Array<Formation>> {
        return this.formationApi.fetchFormation();
        }
    }
