async function getResponse(question) {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer YOUR_OPENAI_API_KEY`
        },
        body: JSON.stringify({
            model: "text-davinci-003", // You can adjust the model version as needed
            prompt: `Answer this question based on the resume: ${question}`,
            max_tokens: 150
        })
    });
    const data = await response.json();
    return data.choices[0].text.trim();
}

document.querySelector("#chat-submit").addEventListener("click", async () => {
    const question = document.querySelector("#chat-input").value;
    const response = await getResponse(question);
    document.querySelector("#chat-output").textContent = response;
});
