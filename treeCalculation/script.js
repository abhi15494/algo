// LEVELS:
// [o] >>>  No of Peoples
// [o] >>>  Array of Peoples with name, age
// [o] >>>  Array of Peoples with name, age, parent name, children count, level

const datacall = fetch("./data.json")
    .then(response => response.json())
    .then(data => analysedata(data));

function analysedata(data) {
    console.log(data)
    const analyseddata = recursivedata(data, -1)
        .sort((a, b) => a.level - b.level);
    document.getElementById('output').innerText = JSON.stringify(analyseddata, null, 4);
    console.log(analyseddata)
}

function recursivedata(...args) {
    let [datas, level, pname] = args;
    const result = [];
    level++;

    for (const data of datas) {
        data.level = level;
        data.parent = pname ? pname : 'NO_PARENT_AVAILABLE';
        data.childrencount = countChildren(data.children)
        if (data.children && data.children.length > 0) {
            result.push(...recursivedata(data.children, level, data.name));
        }
        result.push(data);
    }
    return result;
}

function countChildren(childdata) {
    let count = 0
    for (const child of childdata) {
        count++;
        if (child.children && child.children.length > 0) {
            count += countChildren(child.children);
        }
    }
    return count;
}