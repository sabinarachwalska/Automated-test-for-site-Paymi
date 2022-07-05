export const password = [
  "QhbLresmtwFQRvKTkEN4",
  "D7ZaAuCntmBf5f8buF4D",
  "ER7HCE6aYmF7qouYCGJc",
  "NXTFD4Aua1yMrEdBkMeH",
  "9Q51XawyhUfpY280Mmho",
  "XN0rEwx5PWHTMJGPb3ML",
  "Yw2vK3YbvZ8L6RnG1kJP",
  "mxkbFuKrUyuH0Bk45Wbq",
  "cFyjDKk4BpwR6c92pjcX",
  "4HuuYxnMAnu9omvk811w",
  "XxfRGRkpJqayTV9YvDVV",
  "sgNGfvY5VBWHoQusGueh",
  "MCdMYvgdhtX7V43CREii",
  "6cxDdi2RVjp95BPpx61Y",
  "fntaqBByDXD8U18jrB0u",
  "FKGQYHGtMPwR5XJZDw8L",
  "5cGGXT4AKM4kDBZt02U7",
  "mT7rwUmvECGJQzjci80N",
  "Yy8EyYcxyjN2YaWmKRRE",
  "EDHznFZKacFn6Cpu2wwK",
  "TvJNdEhD02cEBF5hAYqj",
];

function generateRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export const generateRandomNumber = Math.floor(Math.random() * 10 + 2);
export const randomEmail =
  Math.random().toString(10).substring(11) + "test" + "@E2E-test.com";
export const generatePassword = generateRandom(password);
