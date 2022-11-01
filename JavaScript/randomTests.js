const text_dict = {};
text_dict["test"] = "test1 test2";
console.log(text_dict);

console.log(
  text_dict["test"].split(" ")[0][0] + text_dict["test"].split(" ")[1][0]
);
