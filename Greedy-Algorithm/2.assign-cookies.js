var findContentChildren = function (g, s) {

    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let contentChildren = 0
    let i = 0


    while (i < s.length) {
        if (s[i] >= g[contentChildren]) {
            contentChildren++
        }
        i++
    }


    return contentChildren
};