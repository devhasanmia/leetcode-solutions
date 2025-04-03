
type TToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

const expect = (val: any): TToBeOrNotToBe => {
    return {
        toBe(val1) {
            if (val === val1) {
                return true
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe(val1) {
            if (val !== val1) {
                return true
            } else {
                throw new Error("Equal");
            }
        },
    }
};
