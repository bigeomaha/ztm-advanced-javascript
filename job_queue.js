// PRIORITIZATION of jobs in a queue
//  1 - microtask queue
//  2 - task queue
//  3 - I/O callbacks

const promisify = (item, delay) =>
    new Promise((resolve) =>
        setTimeout(() => resolve(item), delay)
    );

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel completed: ${output1} ${output2} ${output3}`
}

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race completed: ${output1}`
}

async function sequential() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequential completed: ${output1} ${output2} ${output3}`
}

sequential().then(console.log);
parallel().then(console.log);
race().then(console.log);