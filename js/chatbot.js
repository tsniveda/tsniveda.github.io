async function getResponse(question) {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "text-davinci-003", // You can adjust the model version as needed
            prompt: "Answer this question based on the resume: ${question}",
            max_tokens: 150
        })
    });
    const data = await response.json();
    return previous + "\n" + question;//return data.choices[0].text.trim();
}

document.querySelector("#chat-submit").addEventListener("click", async () => {
    const previous = document.querySelector("#chat-output").textContent;
    const question = document.querySelector("#chat-input").value;
    const response = await getResponse(previous, question);
    document.querySelector("#chat-output").textContent = response;
});
