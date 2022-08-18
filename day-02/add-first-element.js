function addFirst(element) {
    function addElement(arr) {
        const newArr = [element, ...arr];
        return newArr;
    }
    return addElement;
}

const addOrange = addFirst('orange');
console.log(addOrange(['red', 'blue', 'green']));