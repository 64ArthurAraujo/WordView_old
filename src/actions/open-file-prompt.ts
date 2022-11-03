export function openFilePrompt(): Promise<File> {
  return new Promise((resolve,) => {
    let fileInput: HTMLInputElement = document.createElement("input");

    fileInput.type = "file";
    fileInput.setAttribute("visibility", "hidden");

    fileInput.click();

    fileInput.addEventListener("change", () => {
      const files = fileInput.files;

      if (!files.length) clear();

      resolve(files[0]);
    });

    function clear() {
      document.body.removeChild(fileInput);
    }
  });
}
