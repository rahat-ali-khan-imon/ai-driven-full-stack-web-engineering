function describeDeclaration(keyword) {
    if(keyword === 'let') {
        return 'Cannot redeclare, can reassign';
    } else if(keyword === 'const') {
        return 'Cannot redeclare, cannot reassign';
    } else if(keyword === 'var') {
        return 'Can redeclare, can reassign';
    } else {
        return 'Invalid';
    }
}

console.log(describeDeclaration('let'));
console.log(describeDeclaration('const'));
console.log(describeDeclaration('var'));
console.log(describeDeclaration('int'));
console.log(describeDeclaration([10, 20, 30]));
console.log(describeDeclaration([]));
console.log(describeDeclaration({}));
console.log(describeDeclaration(undefined));
console.log(describeDeclaration(null));