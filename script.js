const totalTables = 15;
const menuURL = "https://your-menu-link.com";

const container = document.getElementById("tables");

for (let i = 1; i <= totalTables; i++) {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>VHUNTE BAMBOO COTTAGE</h2>
        <h3>TABLE ${String(i).padStart(2, "0")}</h3>
        <div id="qr${i}" class="qr"></div>
        <div class="note">Scan for Menu</div>
    `;

    container.appendChild(card);

    new QRCode(document.getElementById(`qr${i}`), {
        text: menuURL,
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });
}
