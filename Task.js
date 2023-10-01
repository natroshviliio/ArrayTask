// შეასრულე ყველა დავალება, თავისუფლად შეგიძლია დაგუგლო და მოიძიო კოდი თუ რომელიმე გაგიჭირდება ან ოპტიმალურ ვარიანტს ვერ მოიფიქრებ
// მთავარია გაიაზრო რა როგორ მუშაობს.

const sumOfPreviousElement = () => {
    // მოცემული მასივიდან დააბრუნე ახალი მასივი ისე რომ ყოველი ელემენტი უდრიდეს წინას ჯამს, თუ ელემენტი ინდექსად 0-ია დააბრუნოს იგივე ელემენტი.
    // 3 ქულა
    let arr = [1, 12, 57, 4, 0, 87, 12, 90];
    // დაწერე კოდი

    return arr;
}
console.log(sumOfPreviousElement());

const returnOnlyStringElements = () => {
    // მოცემული მასივიდან დააბრუნე მხოლოდ ტექსტური ტიპის ელემენტები
    // 3 ქულა
    let arr = ["lion", "cat", 78, { x: 48.7, y: 95.21 }, "coffee", "mosquito", 0x8e7d, "stars", new Object("human")];
    // დაწერე კოდი

    return arr;
}
console.log(returnOnlyStringElements());

const isSomeElementOfObjectType = () => {
    // დააბრუნე boolean, მოცემული მასივი შეიცავს თუ არა ერთზე მეტ ობიექტის ტიპის ელემენტს მაინც
    // 3 ქულა
    let arr = ["lion", "cat", 78, { x: 48.7, y: 95.21 }, "coffee", "mosquito", 0x8e7d, "stars", new Object("human")];
    // დაწერე კოდი

    return /*boolean*/;
}
console.log(isSomeElementOfObjectType());

const isAllOfElementString = () => {
    // დააბრუნე boolean, მოცემული მასივის ყველა ელემენტი ტექსტური ტიპის არის თუ არა
    // 3 ქულა
    let arr = ["car", "machine", 78, 1, "movie", 0, "76"];
    // დაწერე კოდი

    return /*boolean*/;
}
console.log(isAllOfElementString());

const reverseNumbers = () => {
    // დააბრუნე შებობრუნებული მასივი
    // 3 ქულა
    let arr = [1, 2, 3, 4, 5, 6];
    // დაწერე კოდი

    return arr;
}
console.log(reverseNumbers());

const sortNumbers = () => {
    // დააბრუნე სორტირებული რიცხვები ზრდადობით
    // 3 ქულა
    let arr = [1, 7, 4, 0, 400, 328, 10, 5];
    // დაწერე კოდი

    return arr;
}

const onlyNumberElementsFromArrays = () => {
    // ორივე მასივიდან ამოიღე მხოლოდ რიცხვები, გადააქციე ერთ მასივად და დააბრუნე ერთი მთლიანი რუცხვების მასივი
    // 3 ქულა
    let arr1 = [1, 65, "hello", 0, "cup"];
    let arr2 = ["master", 0, "radio", 97, 12];
    // დაწერე კოდი

    return arr1;
}
console.log(onlyNumberElementsFromArrays());

const findIndexByElement = () => {
    // დააბრუნე იმ ელემენტის ინდექსი რომელოც უდრის 3-ს
    // 3 ქულა
    let arr = [30, 3, 12, 7, 100, 3, 0]
    let index;

    return index;
}
console.log(findIndexByElement());

const indexOfSpecificElement = () => {
    // იპოვე და დააბრუნე ისეთი ელემენტის ინდექსი რომლის ელემენტიც ნაკლებია 0-ზე
    // 3 ქულა
    let arr = [1, 7, 20, 12, -10, 0, -10, 300];
    let index;
    // დაწერე კოდი

    return index;
}
console.log(indexOfSpecificElement());

const findLastIndexOfSpecificElement = () => {
    // დააბრუნე ბოლოდან პირველი ელემენტის ინდექსი რომელი ელემენტის დატა-ტიპიც string-ია
    // 4 ქულა
    let arr = [12, "hola", 56, "amigo", 0, 300, 12];
    let index;
    // დაწერე კოდი

    return index;
}
console.log(findLastIndexOfSpecificElement());

const findCat = () => {
    // იპოვე პირველივე კატა
    // 3 ქულა
    const arr = ["dog", "dog", "lion", "elephant", "cat", "butterfly", "cat"];
    let cat;
    //დაწერე კოდი

    return cat;
}
console.log(findCat());

const findCatFromLast = () => {
    // იპოვე ბოლოდან პირველი კატა
    // 3 ქულა
    const arr = ["dog", "dog", "lion", "elephant", "cat", "butterfly", "cat", "catLover"];
    let cat;
    //დაწერე კოდი

    return cat;
}
console.log(findCatFromLast());

const arrayOrNot = () => {
    // დააბრუნე boolean, მოცემული ცვლადები არის თუ არა მასივის ტიპის
    // 4 ქულა
    let arr = [1, 5, 4, "0"];
    let arr2 = "[1, 5, 7, 9]";
    let isArray1;
    let isArray2;
    // დაწერე კოდი

    return [isArray1, isArray2];
}
console.log(arrayOrNot());

const averageOfAllNumbers = () => {
    // დააბრუნე საშუალო არითმეტიკული მოცემული მასივიდან
    // 4 ქულა
    const arr = [3, 6, 10, 2, 7, 8, 3, 5];
    let avg;
    // დაწერე კოდი

    return avg;
}
console.log(averageOfAllNumbers());