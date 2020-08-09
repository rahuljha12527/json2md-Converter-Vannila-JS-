const data = {
  title: "Chemical Prouct",
  date: "12/05/1996",
  primary: {
    name: "Ice cream sandwich",
    calories: "237",
    fat: "9",
    carbs: "37",
    protein: "4",
  },

  secondary: {
    name: "Ice cream sandwich",
    calories: "237",
    fat: "9",
    carbs: "37",
    protein: "4",
  },
};

console.log("data.primary", data.primary);
console.log("data", data);
console.log("data", data.title);

function CreateTableFromJSON(input) {
  const jsonObj = [
    {
      p:
        input.title != null && input.title != undefined
          ? `**${input.title}**`
          : "",
    },
    { h4: input.date != null && input.date != undefined ? input.date : "" },
    {
      table: {
        headers: Object.keys(input.secondary),
        rows: [Object.values(input.secondary)],
      },
    },
  ];
  console.log("data array", jsonObj, json2md(jsonObj));
  console.log("data.title", input.title);
  return jsonObj;
}
//CreateTableFromJSON(data);
function downloadAsOnject(data, exportName) {
  let dataStr = "data:text;charset=utf-8," + encodeURIComponent(json2md(data));
  let downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".md");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
document.getElementById("converter").addEventListener("click", function () {
  downloadAsOnject(CreateTableFromJSON(data), "rahul");
});

//console.log(CreateTableFromJSON());
// function jsonToMdConverter() {

// }

//let storeData = CreateTableFromJSON(data);
//console.log(CreateTableFromJSON(data));
//console.log(json2md(storeData));
