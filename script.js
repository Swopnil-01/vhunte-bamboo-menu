const menuURL = "https://swopnil-01.github.io/vhunte-bamboo-menu/";

document.getElementById("download").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4');

    doc.html(document.body, {
        callback: function(doc) {
            doc.save("Cafe_Menu.pdf");
        },
        x: 20,
        y: 20,
        html2canvas: { scale: 0.57 }
    });
});
