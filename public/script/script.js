function addEventBtn() {
    console.log("click");
}

async function handleDelete(id) {
    console.log("HandleDelete was called with id", id);
    const response = await fetch(`/calendar/${id}`, {
        method: "delete"
    });
    if (response.redirected) {
        window.location.href = response.url;
    }
};

async function handleEdit(evt) {
    const id = Number(evt.target.dataset.id); // data-id -> dataset.id
    const container = evt.target.parentElement;
    const dateEl = container.querySelector(".eventDate");
    const titleEl = container.querySelector(".eventTitle");
    // if not editable make them editable
    if (!dateEl.isContentEditable && !titleEl.isContentEditable) {
        dateEl.contentEditable = true;
        titleEl.contentEditable = true;
        // clicking the same button should save the changes
        evt.target.innerText = "Save";
    } else {
        // Second time clicked it should save changes
        // reset element to be non editable
        dateEl.contentEditable = false;
        titleEl.contentEditable = false;
        evt.target.innerText = "Edit";
        // Look at values of authorEl and quoteEl and submit new quote
        const newEvent = {
            date: dateEl.innerText,
            title: titleEl.innerText,
        };
        const response = await fetch(`/calendar/${id}`, {
            method: "put",
            body: JSON.stringify(newEvent),
            headers: {
                "Content-Type": "application/json",
            },
        });
        // Check if there is a redirect to follow the new url
        if (response.redirected) {
            window.location.href = response.url;
        }
    }
}
document
    .querySelectorAll(".edit-button")
    .forEach((btn) => (btn.onclick = handleEdit));