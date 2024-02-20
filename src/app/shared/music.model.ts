export default class Music {
    private file: any;
    constructor(private path: string) {
        try {
            this.file = new Audio(path);
        } catch (e) {
            console.log(e); 
        }
    }
}