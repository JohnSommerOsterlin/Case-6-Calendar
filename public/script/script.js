function addEventBtn() {
    console.log("click");
}

async function handleDelete(id) {
    console.log("HandleDelete was called with id", id);
    const response = await fetch(`/calendar/${id}`, { method: "delete" });
    if (response.redirected) {
        window.location.href = response.url;
    }
}