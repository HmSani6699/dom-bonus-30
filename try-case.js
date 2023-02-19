
// console.log('ami')
// console.log('Tomay')
// console.log('VAllo')
// console.log('Basi')
// try {

//     console.log(student)
// }
// catch (e) {
//     console.log('ami kinto error mamabose asi tmiamay vole jeo na')
// }
// finally {
//     console.log('ami finally mama')
// }


// console.log('tinu')
// console.log('ki ')
// console.log('vallo vaso')

// console.log('ami parbo insa allah');

document.getElementById('button').addEventListener('click', function () {
    const inputFiled = document.getElementById('input-filed');
    const inputValue = inputFiled.value;
    try {
        if (inputValue == '') throw 'input is empty';
        if (isNaN(inputValue)) throw 'input is not a number';
        if (inputValue < 0) throw 'negative number is not allow';
    }
    catch (e) {
        document.getElementById('demo').innerText = e
    }
})