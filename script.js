function motivacija() {
    const teksti = [
        "Katrs treniņš tevi padara stiprāku!",
        "Nepadodies – rezultāti nāks!",
        "Mazie soļi ved uz lieliem mērķiem!",
        "Sāc šodien, nevis rīt!"
    ];

    const random = Math.floor(Math.random() * teksti.length);
    document.getElementById("rezultats").innerText = teksti[random];
}
