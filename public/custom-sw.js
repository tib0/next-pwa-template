self.addEventListener("message", async (event) => {
  if (event.data.action === "a-cool-action") {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(3000);
    console.log("Yo world !");
  }
  event.ports[0].postMessage(true);
});
