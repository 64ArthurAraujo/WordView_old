export function openFilePrompt() {
    let fileInput: HTMLInputElement = document.createElement("input");
    
    fileInput.type = "file";
    fileInput.setAttribute("visibility", "hidden");

    fileInput.click();

    fileInput.addEventListener("change", () => {
        document.body.removeChild(fileInput);
    });
}