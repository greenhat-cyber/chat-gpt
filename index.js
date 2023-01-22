// 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


const { Configuration, OpenAIApi } = require("openai")
const express = require("express")
const cors = require('cors');
const bodyParser = require("body-parser");

const configuration = new Configuration({
    organization: "org-oyB0mELsuccT3Ctkbg5rV8NB",
    apiKey: "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",
    // apiKey: process.env.OPENAI_API_KEY,
});
// const response = await openai.listEngines();

// async function callApi() {

// }
// callApi()

// create a simple api that calls the function above
const openai = new OpenAIApi(configuration);


const app = express()

app.use(bodyParser.json())
app.use(cors())

const port = 3080

app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(message, "message");
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
    });
    // console.log(response.data.choices[0].text)
    res.json({
        message : response.data.choices[0].text,
    })
});
app.listen(port, () => {
    // console.log("listening..............");
})