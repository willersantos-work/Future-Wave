export class ArrayUtils {
    static orderNumber = (a: string | number, b: string | number, by?: "ASC" | "DESC"): number =>
        by === "DESC" ? Number(b) - Number(a) : Number(a) - Number(b);

    static orderString = (a: any, b: any, by?: "ASC" | "DESC"): number =>
        by === "DESC" ? String(b).localeCompare(String(a)) : String(a).localeCompare(String(b));
}
