export class TextUtils {
    static splitQuerySearch = (querySearch: string): string[] => querySearch.split(/[ -/:=|{}()@]/g);

    static formatDateForInput = (date?: string): string | undefined => {
        if (date) {
            const [day, month, year] = date.split("/");
            const fullYear = year.length < 4 ? "20" + year : year;
            return `${fullYear}-${month}-${day}`;
        }
        return undefined;
    };
}
