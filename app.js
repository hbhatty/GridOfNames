let data = [{
    name: "Harsh",
    age: "19"
    },{
    name: "Hani",
    age: "21"
    },
    {
    name: "David",
    age: "19"
    },
    {
    name: "Chip",
    age: "17"
    },
    {
    name: "Neh",
    age: "19"
    },
    {
    name: "Harsh",
    age: "19"
    },
];

const info = document.querySelector("#info") //selects the div
let details = data.map(item => {
    return "<div>" + item.name +" is " + item.age + "</div>";
})

info.innerHTML = details.join("\n");  //display html(joins the list of names/age together)

