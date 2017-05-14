export class TableColumns {
    slugName: string;

    constructor(
        public displayName: string) {

            this.slugName = this.displayName
                            .toLowerCase()
                            .replace(/[^\w ]+/g,'')
                            .trim()
                            .replace(/ +/g,'-');
        }
}