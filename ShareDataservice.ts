import { BehaviorSubject ,Subject } from "rxjs";

export class ShareDataService{
    constructor() {}
    public editDataDetails:any =[];
    public subject = new Subject<any>();
    private messageSource =new BehaviorSubject(this.editDataDetails)
    currentMessage =this.messageSource.asObservable();
    changeMessage(message: string){
        this.messageSource.next(message)
    }
}