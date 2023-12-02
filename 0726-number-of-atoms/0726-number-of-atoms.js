/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
    const dfs = (s) => {
        const m = new Map();
        let state = new Map();
        if (s === "") return m;
        let atom = "",
            count = "";

        const updateData = () => {
            if (atom !== "") {
                state.set(atom, (state.get(atom) || 0) + 1);
                atom = "";
            }
            // console.log("count: ", count, state);
            if (count !== "") {
                for (const [key, value] of state.entries()) {
                    state.set(key, value * Number(count));
                }
                count = "";
            }
            for (const [key, value] of state.entries()) {
                let sl = m.get(key) || 0;
                m.set(key, value + sl);
            }
            state.clear();
        };

        for (let i = 0; i < s.length; i++) {
            const c = s.charAt(i);
            if (c === "(") {
                updateData();
                let j = i + 1,
                    cnt = 1;
                while (cnt !== 0) {
                    if (s.charAt(j) === ")") --cnt;
                    else if (s.charAt(j) === "(") ++cnt;
                    ++j;
                }
                state = dfs(s.substring(i + 1, j - 1));
                i = j - 1;
            } else if (c >= "a" && c <= "z") atom += c;
            else if (c >= "A" && c <= "Z") {
                updateData();
                atom += c;
            } else {
                count += c;
            }
        }
        updateData();
        return m;
    };

    const m = dfs(formula);
    const a = Array.from(m);
    a.sort((el1, el2) => el1[0].localeCompare(el2[0]));
    return a.map((el) => el.filter((val) => val !== 1).join("")).join("");
};
