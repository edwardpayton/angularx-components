export class ColumnConfig {
    slugName: string;

    constructor(
        public displayName: string,
        public isSortable: boolean = true) {

            this.slugName = this.displayName
                            .toLowerCase()
                            .replace(/[^\w ]+/g,'')
                            .trim()
                            .replace(/ +/g,'-');
        }
}