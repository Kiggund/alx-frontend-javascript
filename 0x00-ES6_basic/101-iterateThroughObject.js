export default function iterateThroughObject(reportWithIterator){
    let result = '';
    const iterator = reportWithIterator.next();

    while (!iterator.done){
        result += iterator.value + '|';
        iterator = reportWithIterator.next();
    }
    //Removing the trailing '|' from the result
    return result.slice(0, -3);
}