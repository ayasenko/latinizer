export const isCharsEqual = (nextChar: string, char: string): boolean =>
    char.toLowerCase() === nextChar.toLowerCase();

export const isConsonant = (char: string): boolean =>
    isCharsEqual(char, 'б') ||
    isCharsEqual(char, 'в') ||
    isCharsEqual(char, 'г') ||
    isCharsEqual(char, 'д') ||
    isCharsEqual(char, 'ж') ||
    isCharsEqual(char, 'з') ||
    isCharsEqual(char, 'к') ||
    isCharsEqual(char, 'л') ||
    isCharsEqual(char, 'м') ||
    isCharsEqual(char, 'н') ||
    isCharsEqual(char, 'п') ||
    isCharsEqual(char, 'р') ||
    isCharsEqual(char, 'с') ||
    isCharsEqual(char, 'т') ||
    isCharsEqual(char, 'ф') ||
    isCharsEqual(char, 'х') ||
    isCharsEqual(char, 'ц') ||
    isCharsEqual(char, 'ч') ||
    isCharsEqual(char, 'ш') ||
    isCharsEqual(char, 'щ');

export const isUkInput = (text: string): boolean => {
    const textInLowercase = text.toLowerCase();

    return (
        textInLowercase.indexOf('ї') !== -1 ||
        textInLowercase.indexOf('ґ') !== -1 ||
        textInLowercase.indexOf('є') !== -1 ||
        textInLowercase.indexOf('і') !== -1
    );
};

export const isRuInput = (text: string): boolean => {
    const textInLowercase = text.toLowerCase();

    return (
        textInLowercase.indexOf('ё') !== -1 ||
        textInLowercase.indexOf('ы') !== -1 ||
        textInLowercase.indexOf('ъ') !== -1 ||
        textInLowercase.indexOf('э') !== -1
    );
};
