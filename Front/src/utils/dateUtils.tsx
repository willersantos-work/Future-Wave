export class DateUtils {
    static formatDateForInputs = (date?: Date): string | undefined => {
        if (date) {
            const newDate = new Date(date);

            newDate.setDate(newDate.getDate());

            const day = newDate.getDate().toString().padStart(2, "0");
            const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
            const year = newDate.getFullYear().toString();

            return `${year}-${month}-${day}`;
        }

        return undefined;
    };

    static formatDate = (date: Date | string): string => {
        const newDate = new Date(date);

        const day = newDate.getDate().toString().padStart(2, "0");
        const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
        const year = newDate.getFullYear().toString();

        return `${day}/${month}/${year}`;
    };

    static now = (): Date => {
        return new Date();
    };
}
