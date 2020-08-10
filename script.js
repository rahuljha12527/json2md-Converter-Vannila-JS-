const data = {
  title: "Chemical Prouct",
  date: "12/05/1996",
  primary: [
    { value: "ice cream sandwhich", title: "name" },
    { title: "Gender", value: "Male" },
    { title: "Dob", value: new Date() },
  ],

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

function primaryKeyValue(input){
   let ObjectD=[];
  for(let i=0;i<input.length;i++){
     ObjectD[i]='\n'+input[i].title+":"+input[i].value;
     
}
return ObjectD;
}

// function primaryValue(input){
//   let ObjectD=[];
//  for(let i=0;i<input.length;i++){
//     ObjectD[i]=input[i].value;
    
// // }
// return ObjectD;
// }


function CreateTableFromJSON(input) {
  const jsonObj = [
    {
      p:
        input.title != null && input.title != undefined
          ? `**${input.title}**`
          : "",
    },
    {
      ol: [`${primaryKeyValue(input.primary)}`],
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
