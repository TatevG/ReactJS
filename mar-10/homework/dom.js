// document.getElementById("btn").addEventListener("click", myFunc);

const myFunc = async () => {
    const name = document.getElementById("gitUsr").value;
    try {
        const url = 'https://api.github.com/users/'+name;
        const response = await fetch(url);
        const value = await response.json();
        let msg = "";
        if (value.message == "Not Found") {
            msg = value.message;
        } else {
            let output = "";
            for (const property in value) {
                output += property + ': ' + value[property] + '<br>';
            }
            msg = output;
        }
        const node = document.createElement("LI");
        node.innerHTML = msg;
        document.getElementById("list").appendChild(node);
    }
    catch (e) {
        console.log(e);
    }
}
