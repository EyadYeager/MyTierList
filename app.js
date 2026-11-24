async function loadTemplates() {
    const browser = document.querySelector("#template-browser");

    try {
        const response = await fetch("templates.json")
        if (!response.ok) {
            throw new Error("Failed to load templates.json");
        }

        const templatesData = await response.json();

        browser.replaceChildren(...templatesData.listTemplates.map(template => {
            const link = document.createElement("a");
            link.className = "list-item";
            link.href = `editor.html?template=${encodeURIComponent(template.id)}`;

            const img = document.createElement("img")
            img.className = "thumbnail";
            img.src = template.thumbnail;
            img.alt = template.name;

            const name = document.createElement("span");
            name.textContent = template.title;

            link.append(img, name);


            return link;
        }));
    }
    catch (error) {
        browser.textContent = error.message;
    }


}

loadTemplates();