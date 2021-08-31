export const upperFisrtLetterPipe = (text) => {

    let firstLetterText = text.toLowerCase();
    firstLetterText = firstLetterText.replace(/\b\w/g, word => word.toUpperCase())

    return firstLetterText;

}